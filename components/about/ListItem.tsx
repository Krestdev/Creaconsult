import { ArrowRightCircle, Play } from "lucide-react";
import React from "react";

interface ListItemProps {
  icon: "circle" | "caret" | "";
  text: string;
}

const ListItem = ({ icon, text }: ListItemProps) => {
  return (
    <li className="flex gap-4 items-start">
      {icon == "caret" ? (
        <Play strokeWidth={0.8} className="text-[--primary]" />
      ) : (
        <ArrowRightCircle strokeWidth={0.8} className="text-[--primary]" />
      )}{" "}
      <p className="small font-light">{text}</p>
    </li>
  );
};

export default ListItem;
