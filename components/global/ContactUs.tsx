"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import { BoundingBox, Envelope, MapPin, Phone } from "phosphor-react";

const ContactUs = () => {
  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.png">
      <div className="flex flex-col md:flex-row gap-4 py-[24px]">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="font-semibold hidden md:block">Contact us</h2>
          <h4 className="font-bold md:hidden">Contact us</h4>
          <div className="space-y-8">
            <div className="max-w-[500px]">
              <h4 className=" font-semibold hidden md:block">
                Shear your projects and lets work togrther
              </h4>
              <h6 className=" font-semibold md:hidden">
                Shear your projects and lets work togrther
              </h6>
              <p>
                Des solutions innovantes en ingénierie et maîtrise d'œuvre pour
                des projets d'exception.
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
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className=" flex flex-col sm:flex-row gap-4 w-full">
            <div className="w-full">
              <label htmlFor="name">
                <h4 className="hidden md:block">Name</h4>
                <h6 className="md:hidden">Name</h6>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="bg-gray-200 shadow-md p-4 w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email">
                <h4 className="hidden md:block">Email</h4>
                <h6 className="md:hidden">Email</h6>
              </label>
              <input
                type="text"
                id="email"
                placeholder="Your@email.com"
                className="bg-gray-200 shadow-md p-4 w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject">
              <h4 className="hidden md:block">Subject</h4>
              <h6 className="md:hidden">Subject</h6>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Your Subject"
              className="bg-gray-200 shadow-md p-4 w-full"
            />
          </div>

          <div>
            <label htmlFor="message">
              <h4 className="hidden md:block">Message</h4>
              <h6 className="md:hidden">Message</h6>
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="bg-gray-200 shadow-md p-4 w-full min-h-[250px]"
            />
          </div>

          <div className=" flex gap-4">
            <button className="px-4 py-2 bg-[var(--primary)] text-white w-1/2 shadow-md">
              Reset
            </button>

            <button className="px-4 py-2 bg-green-600 w-1/2 text-white shadow-md shadow-black/30">
              Send
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
