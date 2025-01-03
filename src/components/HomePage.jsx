import BookCards from "./BookCards";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { useAuth } from "../../src/context/AuthContext";

export default function HomePage() {
  const { user } = useAuth();
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
  }, [query, user]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen pb-8 w-full items-center  bg-[#F9C5D1]">
      <div className="text-center py-8">
        <h1 className="font-heading text-4xl md:text-8xl text-[#2D325B]">
          Search a book
        </h1>
        <p className="font-heading text-[#848edb] font-bold">
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
