import React, { useEffect, useState } from "react";
import { LinkItem } from "./types";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedLinks = localStorage.getItem("links");
    if (storedLinks) setLinks(JSON.parse(storedLinks));
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const addLink = (link: LinkItem) => setLinks([...links, link]);
  const deleteLink = (id: string) => setLinks(links.filter((l) => l.id !== id));
  const updateLink = (updated: LinkItem) =>
    setLinks(links.map((link) => (link.id === updated.id ? updated : link)));

  const filteredLinks = links.filter((link) =>
    [link.title, link.url, link.description, (link.tags || []).join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>React Links Vault</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LinkForm onAdd={addLink} />
      <LinkList links={filteredLinks} onDelete={deleteLink} onUpdate={updateLink} />
    </div>
  );
};

export default App;