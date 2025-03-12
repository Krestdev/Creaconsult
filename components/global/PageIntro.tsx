import React from "react";
import SectionContainer from "./SectionContainer";

const PageIntro = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <SectionContainer img="/ui/global/about.jpg">
        <div className="flex justify-center items-center p-10 text-white">
          <h1 className="text-white">{title}</h1>
        </div>
      </SectionContainer>
      {children}
    </>
  );
};

export default PageIntro;
