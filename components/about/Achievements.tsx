import { Dictionary } from "@/lib/i18n";
import SectionContainer from "../global/SectionContainer";

interface AchievementType {
  dictionary: Dictionary;
}

const Achievements = ({ dictionary }: AchievementType) => {
  return (
    <SectionContainer className="py-[24px] md:py-20">
      <div className="pb-4">
        <h2 className="font-semibold hidden md:block">
          {dictionary.about.certification.title}
        </h2>
        <h4 className="font-bold md:hidden">
          {dictionary.about.certification.title}
        </h4>
      </div>
      <div className="flex gap-2 lg:gap-20 flex-col lg:flex-row">
        <div className="lg:w-1/2 space-y-4">
          {/* <h2 className="font-semibold hidden md:block">
            Creation of the company
          </h2> */}
          <h5 className="font-semibold md:hidden">
            {dictionary.about.certification.sub}
          </h5>
          <h6 className="font-semibold">
            {dictionary.about.certification.sub}
          </h6>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{
              __html: dictionary.about.certification.desc,
            }}
          />
        </div>
        <div className="flex flex-row justify-center gap-7">
          <div className="flex flex-col justify-between items-center gap-2">
            <img
              src="/ui/certificates/isoveritas.png"
              className="max-w-[200px] aspect-video w-full h-auto"
              alt="crea1"
            />
            <img
              src="/ui/certificates/isoveritas2.png"
              className="max-w-[200px] aspect-video w-full h-auto"
              alt="crea2"
            />
          </div>
          <img
            src="/ui/certificates/ukasMs.png"
            alt="crea3"
            className="max-w-[200px] aspect-auto w-full h-auto"
          />
        </div>
      </div>
      {/* <div className="flex gap-4 h-fit p-4 justify-center items-center mt-10">
        {["2011", "2015", "2018", "2024"].map((date, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "p-2 flex justify-center items-center aspect-square rounded-full text-white h-fit w-fit border-8",
                index !== 1
                  ? "border-gray-300 bg-black"
                  : "border-gray-300 bg-[var(--primary)]"
              )}
            >
              <small className="font-semibold">{date}</small>
            </div>
          );
        })}
      </div> */}
    </SectionContainer>
  );
};

export default Achievements;
