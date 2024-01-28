// components/Forms/Search.tsx
import { IoMdSearch } from "react-icons/io";
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    onSearch(value); // Trigger the search function on each change for live search
  };

  return (
    <form onSubmit={handleSearch} className="text-gray-700 ">
      <span className="absolute m-4 text-xl">
        <IoMdSearch />
      </span>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search here ..."
        className="p-3 px-12 md:w-[500px] rounded outline-none border border-collapse"
        value={searchTerm}
        onChange={handleChange}  
      />
    </form>
  );
}


