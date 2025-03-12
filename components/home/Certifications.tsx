import React from "react";
import SectionContainer from "../global/SectionContainer";

const Certifications = () => {
  return (
    <SectionContainer className="py-10">
      <div className="flex gap-4 overflow-hidden">
        <img
          src="/ui/certificates/isoveritas.png"
          alt="certificates"
          className="h-[4rem]"
        />
        <img
          src="/ui/certificates/isoveritas2.png"
          alt="certificates"
          className="h-[4rem]"
        />
        <img
          src="/ui/certificates/ukasMS.png"
          alt="certificates"
          className="h-[4rem]"
        />
      </div>
    </SectionContainer>
  );
};

export default Certifications;
