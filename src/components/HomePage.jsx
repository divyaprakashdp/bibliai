import BookCards from "./BookCards";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { UserAuth } from "../../src/context/AuthContext";

export default function HomePage() {
  const { user } = UserAuth();
  let [query, setQuery] = useState("");
  let [bookData, setBookData] = useState();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  // useEffect(() => {
  //   const savedBookData = sessionStorage.getItem("Book");
  //   if (savedBookData != null) {
  //     setBookData(savedBookData);
  //   }
  // }, []);

  useEffect(() => {
    try {
      if (query !== "") {
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&token=${user?.accessToken}&maxResults=20`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(`data=> ${data}`);
            setBookData(data.items);
            sessionStorage.setItem("Book", JSON.stringify(data.items));
            setError(null);
          });
      } else if (sessionStorage.getItem("Book")) {
        setBookData(JSON.parse(sessionStorage.getItem("Book")));
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setBookData(null);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen pb-8 w-full items-center bg-[#EBE9DD]">
      <div className="text-center py-8">
        <h1 className="font-heading font-extralight text-4xl md:text-6xl text-[#800000]">
          Welcome
        </h1>
        <p className="font-heading text-[#800000]">
          Unlock the World of Imagination: Search, Discover, and Buy Books with
          Ease.
        </p>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      <SearchBar onSubmit={handleSearch} />

      <div className="flex flex-wrap w-[80%] justify-center items-center gap-8">
        {bookData && <BookCards bookData={bookData} />}
      </div>
    </div>
  );
}
