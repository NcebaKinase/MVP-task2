import React, { useState } from "react";
import { LinkItem } from "../types";

interface Props {
  onAdd: (link: LinkItem) => void;
}

const LinkForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) return;
    const newLink: LinkItem = {
      id: Date.now().toString(),
      title,
      url,
      description,
      tags: tags.split(",").map((t) => t.trim()),
    };
    onAdd(newLink);
    setTitle("");
    setUrl("");
    setDescription("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
      <button type="submit">Add Link</button>
    </form>
  );
};

export default LinkForm;