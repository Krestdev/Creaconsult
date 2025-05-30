import React from "react";
import SectionContainer from "./SectionContainer";

const PageIntro = ({
  title,
  children,
  img = "/ui/global/about.webp",
}: {
  title: string;
  children: React.ReactNode;
  img?: string;
}) => {
  return (
    <>
      <SectionContainer img={img}>
        <div className="flex justify-center items-center p-10 text-white">
          <h1 className="text-white">{title}</h1>
        </div>
      </SectionContainer>
      {children}
    </>
  );
};

export default PageIntro;
