import Stack from "@mui/material/Stack";
import BookCards from "./BookCards";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  let [bookData, setBookData] = useState();

  const onSearch = (searchTerm) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=relevance&key=AIzaSyD_Hf_1_-268aWv_My3dR-peG6NE9yb2eQ&maxResults=20`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(`data=> ${data}`);
        setBookData(data.items);
      });
  };

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=self-help&orderBy=relevance&key=AIzaSyD_Hf_1_-268aWv_My3dR-peG6NE9yb2eQ&maxResults=20"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(`data=> ${data}`);
        setBookData(data.items);
      });
  }, []);
  return (
    <Box
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mx={"auto"}
      width={"80%"}
      marginTop="20px"
      color={"#800000"}
    >
      <Typography variant="h2" fontFamily={"Inconsolata"}>
        Welcome
      </Typography>
      <Typography variant="h5" fontFamily={"Inconsolata"}>
        Unlock the World of Imagination: Search, Discover, and Buy Books with
        Ease.
      </Typography>
      <SearchBar onSearch={onSearch} />
      <Stack
        direction="row"
        spacing={5}
        useFlexGap
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {bookData && <BookCards bookData={bookData} />}
      </Stack>
    </Box>
  );
}
