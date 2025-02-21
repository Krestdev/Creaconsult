"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import BorderDecoration from "./BorderDecoration";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  request: z.string().min(1, "Request is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-8 space-y-4 flex flex-col items-center"
    >
      <div className="flex gap-4 w-full">
        <div className="formInput">
          <label>Name:</label>
          <input {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="formInput">
          <label>Surname:</label>
          <input {...register("surname")} />
          {errors.surname && <p>{errors.surname.message}</p>}
        </div>
      </div>
      <div className="formInput">
        <label>Email:</label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="formInput">
        <label>Company:</label>
        <input {...register("company")} />
      </div>
      <div className="formInput">
        <label>Request:</label>
        <input {...register("request")} />
        {errors.request && <p>{errors.request.message}</p>}
      </div>
      <div className="formInput">
        <label>Message:</label>
        <textarea {...register("message")} />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <BorderDecoration>
        <button type="submit" className="w-full min-w-[200px] small">
          Submit
        </button>
      </BorderDecoration>
    </form>
  );
};

export default ContactForm;
