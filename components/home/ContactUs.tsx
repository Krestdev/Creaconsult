import React from "react";
import ContactForm from "./ContactForm";
import ButtonLine from "../utils/ButtonLine";
import BorderDecoration from "../utils/BorderDecoration";

const ContactUs = () => {
  return (
    <section className="h-fit">
      <div className="max-w-7xl mx-auto w-full h-full py-[24px] flex justify-center items-center">
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="col-span-1">
            <h3>
              Ready To Get Started? <br />
              Let’s Talk To Us Today
            </h3>
            <p>
              With over 15 years of experience, we have mastered the art of
              building highly successful and profitable products.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center ">
            <BorderDecoration color="--primary">
              <button>Contact us</button>
            </BorderDecoration>
          </div>
          {/* <div className="col-span-1">
            <img
              src="/ui/img/img300X400.webp"
              className="w-full h-full min-h-[700px] object-cover"
              alt=""
            />
          </div>
          <div className="col-span-2 text-center">
            <h2>Contactez-Nous</h2>
            <div className="px-[24px] ">
              <ContactForm />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
