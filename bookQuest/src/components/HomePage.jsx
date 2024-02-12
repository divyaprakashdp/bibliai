import BookCards from "./BookCards";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

export default function HomePage() {
  const { user } = UserAuth();
  let [query, setQuery] = useState("");
  let [bookData, setBookData] = useState();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&token=${user?.accessToken}&maxResults=20`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(`data=> ${data}`);
        setBookData(data.items);
      });
  }, [query]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="flex flex-col md:h-screen w-full items-center bg-[#EBE9DD]">
      <div className="text-center py-8">
        <h1 className="font-heading font-extralight text-4xl md:text-6xl text-[#800000]">
          Welcome
        </h1>
        <p className="font-heading text-[#800000]">
          Unlock the World of Imagination: Search, Discover, and Buy Books with
          Ease.
        </p>
      </div>

      <SearchBar onSubmit={handleSearch} />
      <div className="flex flex-wrap justify-center items-center gap-5">
        {bookData && <BookCards bookData={bookData} />}
      </div>
    </div>
  );
}
