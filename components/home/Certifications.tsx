import SectionContainer from "../global/SectionContainer";

const Certifications = () => {
  return (
    <SectionContainer
      className="py-10"
      color="white"
      img="/ui/global/bglinesDeco.png"
    >
      <div className="flex gap-4 overflow-hidden justify-center">
        <div className="flex gap-4 items-center">
          <img
            src="/ui/certificates/isoveritas.png"
            alt="certificates"
            className="h-[4rem] "
          />
          <p className="w-[160px]">Veritas Certification Iso 14001</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="/ui/certificates/isoveritas2.png"
            alt="certificates"
            className="h-[4rem] object-cover"
          />
          <p className="w-[160px]">Veritas Certification Iso 9001</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="/ui/certificates/ukasMS.png"
            alt="certificates"
            className="h-[4rem] w-[3rem] object-cover"
          />
          <p className="w-[150px]">Ukas Managment systems</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Certifications;
