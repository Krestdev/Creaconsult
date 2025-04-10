"use client";

import { BoundingBox, Envelope, MapPin, Phone } from "phosphor-react";
import SectionContainer from "./SectionContainer";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  profession: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
  // const ContactUs = ({
  //   createContacts,
  // }: {
  //   createContacts: (data: {
  //     name: string;
  //     profession: string;
  //     subject: string;
  //     message: string;
  //     email: string;
  //   }) => Promise<{
  //     name: string;
  //     email: string;
  //     message: string;
  //     subject: string;
  //     profession: string;
  //   }>;
  // }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("Sending...");
    try {
      // createContactMessage(data);
      // await directus.request(createItem("Contacts", data));
      console.log(data);
      setStatus("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.png">
      <div className="flex flex-col md:flex-row gap-4 py-[24px]">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="font-semibold hidden md:block">Contact us</h2>
          <h4 className="font-bold md:hidden">Contact us</h4>
          <div className="space-y-8">
            <div className="max-w-[500px]">
              <h4 className=" font-semibold hidden md:block">
                {`Share your projects and let's work together`}
              </h4>
              <h6 className=" font-semibold md:hidden">
                {`Share your projects and let's work together`}
              </h6>
              <p>
                {
                  "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
                }
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <Envelope size={24} /> <p>creaconsult@yahoo.fr</p>
              </li>
              <li className="flex gap-2">
                <Phone size={24} /> <p>+237 233 426 385</p>
              </li>
              <li className="flex gap-2">
                <BoundingBox size={24} /> <p>11735 Douala-Cameroun</p>
              </li>
              <li className="flex gap-2">
                <MapPin size={24} /> <p>1665 Blvd de la République</p>
              </li>
            </ul>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:w-1/2"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="bg-gray-200 shadow-md p-4 w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="bg-gray-200 shadow-md p-4 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              id="profession"
              {...register("profession")}
              className="bg-gray-200 shadow-md p-4 w-full"
            />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              className="bg-gray-200 shadow-md p-4 w-full"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message")}
              className="bg-gray-200 shadow-md p-4 w-full min-h-[250px]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                reset();
                setStatus("");
              }}
              className="p-4 bg-[var(--primary)] text-white w-1/2 shadow-md"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="p-4 bg-gray-600 w-1/2 text-white shadow-md shadow-black/30"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>

          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
