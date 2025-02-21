import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto w-full min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-1">
            <img
              src="https://placehold.co/300x400"
              className="w-full h-full min-h-[700px] object-cover"
              alt=""
            />
          </div>
          <div className="col-span-2 text-center">
            <h2>Contactez-Nous</h2>
            <div className="px-[24px] ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
