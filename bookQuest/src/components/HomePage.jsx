// import BookCards from "./BookCards";
import SearchBar from "./SearchBar";
// import { useState } from "react";
// import { useEffect } from "react";

export default function HomePage() {
  // let [bookData, setBookData] = useState();

  // const onSearch = (searchTerm) => {
  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=relevance&key=AIzaSyD_Hf_1_-268aWv_My3dR-peG6NE9yb2eQ&maxResults=20`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(`data=> ${data}`);
  //       setBookData(data.items);
  //     });
  // };

  // useEffect(() => {
  //   fetch(
  //     "https://www.googleapis.com/books/v1/volumes?q=self-help&orderBy=relevance&key=AIzaSyD_Hf_1_-268aWv_My3dR-peG6NE9yb2eQ&maxResults=20"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(`data=> ${data}`);
  //       setBookData(data.items);
  //     });
  // }, []);
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
      <SearchBar />
    </div>
  );
}
