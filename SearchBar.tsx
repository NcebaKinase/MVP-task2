import React from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      placeholder="Search links..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;