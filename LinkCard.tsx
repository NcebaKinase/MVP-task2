import React, { useState } from "react";
import { LinkItem } from "../types";

interface Props {
  link: LinkItem;
  onDelete: (id: string) => void;
  onUpdate: (link: LinkItem) => void;
}

const LinkCard: React.FC<Props> = ({ link, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLink, setEditedLink] = useState({ ...link });

  const handleSave = () => {
    onUpdate(editedLink);
    setIsEditing(false);
  };

  return (
    <div className="link-card">
      {isEditing ? (
        <>
          <input value={editedLink.title} onChange={(e) => setEditedLink({ ...editedLink, title: e.target.value })} />
          <input value={editedLink.url} onChange={(e) => setEditedLink({ ...editedLink, url: e.target.value })} />
          <input value={editedLink.description} onChange={(e) => setEditedLink({ ...editedLink, description: e.target.value })} />
          <input value={(editedLink.tags || []).join(", ")} onChange={(e) => setEditedLink({ ...editedLink, tags: e.target.value.split(",").map(t => t.trim()) })} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{link.title}</h3>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
          <p>{link.description}</p>
          <p>Tags: {link.tags?.join(", ")}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(link.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default LinkCard;