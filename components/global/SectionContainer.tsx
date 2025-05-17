import clsx from "clsx";
import React from "react";

const SectionContainer = ({
  children,
  className = "",
  color = "black",
  img,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  img?: string;
}) => {
  return (
    <section
      className={clsx("containerParent bg-cover bg-center py-0 md:py-10", className)}
      style={
        img
          ? {
              backgroundImage:
                color === "white"
                  ? `linear-gradient(to bottom,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('${img}')`
                  : `linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('${img}')`,
            }
          : undefined
      }
    >
      <div className="container px-4">{children}</div>
    </section>
  );
};

export default SectionContainer;
