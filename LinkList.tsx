import React from "react";
import { LinkItem } from "../types";
import LinkCard from "./LinkCard";

interface Props {
  links: LinkItem[];
  onDelete: (id: string) => void;
  onUpdate: (link: LinkItem) => void;
}

const LinkList: React.FC<Props> = ({ links, onDelete, onUpdate }) => {
  return (
    <div className="link-list">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default LinkList;