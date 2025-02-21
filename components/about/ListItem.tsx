import { PushpinOutlined } from "@ant-design/icons";
import React from "react";

interface ListItemProps {
  text: string;
}

const ListItem = ({ text }: ListItemProps) => {
  return (
    <li className="flex gap-4">
      <PushpinOutlined className="text-[24px]" />{" "}
      <p className="small font-light">{text}</p>
    </li>
  );
};

export default ListItem;
