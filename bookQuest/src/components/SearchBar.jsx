import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an API call with the search input

    console.log(searchInput);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[40%] items-center justify-center gap-4"
    >
      <input
        type="text"
        name="searchBar"
        value={searchInput}
        placeholder="Login to search"
        className="w-[90%] h-10 rounded-3xl bg-opacity-50 bg-[#4169e1] text-[#800000] text-center placeholder-blue-900 hover:bg-opacity-20 hover:placeholder-opacity-0"
        onChange={handleChange}
      />
      <button className="hover:scale-150">
        <FaSearch />
      </button>
    </form>
  );
}
