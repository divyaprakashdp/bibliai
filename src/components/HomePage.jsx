import BookCards from "./BookCards";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";

const GOOGLE_BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export default function HomePage() {
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
    const fetchBooks = async () => {
      if (query !== "") {
        setLoading(true);
        const encodedQuery = encodeURIComponent(query);
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&orderBy=relevance&maxResults=20${GOOGLE_BOOKS_API_KEY ? `&key=${GOOGLE_BOOKS_API_KEY}` : ""}`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            const body = await response.text();
            const message = body ? body : response.statusText;
            throw new Error(`Book API error ${response.status}: ${message}`);
          }

          const contentType = response.headers.get("content-type") || "";
          let data;
          if (contentType.includes("application/json")) {
            data = await response.json();
          } else {
            const text = await response.text();
            throw new Error(`Unexpected API response: ${text}`);
          }

          setBookData(data.items || []);
          sessionStorage.setItem("Book", JSON.stringify(data.items || []));
          setError(null);
        } catch (error) {
          setError(error);
          setBookData(null);
        } finally {
          setLoading(false);
        }
      } else {
        const savedBooks = sessionStorage.getItem("Book");
        if (savedBooks) {
          setBookData(JSON.parse(savedBooks));
        }
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

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
      {error && (
        <div className="text-red-600">
          Something went wrong while searching. Please try again later.
        </div>
      )}
      <SearchBar onSubmit={handleSearch} />

      <div className="flex flex-wrap w-[80%] justify-center items-center gap-8">
        {bookData && <BookCards bookData={bookData} />}
      </div>
    </div>
  );
}
