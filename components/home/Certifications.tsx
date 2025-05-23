import SectionContainer from "../global/SectionContainer";

const Certifications = () => {
  return (
    <SectionContainer
      className="py-5 md:py-10"
      color="white"
      img="/ui/global/bglinesDeco.webp"
    >
      <div className="flex gap-4 overflow-hidden justify-center flex-col md:flex-row">
        <div className="flex gap-4 items-center">
          <img
            src="/ui/certificates/isoveritas.webp"
            alt="certificates"
            className="h-[3.5rem] md:h-[4rem] "
          />
          <p className="text-[14px] md:w-[160px]">Veritas Certification Iso 14001</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="/ui/certificates/isoveritas2.webp"
            alt="certificates"
            className="h-[3.5rem] md:h-[4rem] object-cover"
          />
          <p className="text-[14px] md:w-[160px]">Veritas Certification Iso 9001</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="/ui/certificates/ukasMS.webp"
            alt="certificates"
            className="h-[3.5rem] md:h-[4rem] w-[3rem] object-cover"
          />
          <p className="text-[14px] md:w-[150px]">Ukas Managment systems</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Certifications;
