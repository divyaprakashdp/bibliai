import Stack from "@mui/material/Stack";
import BookCards from "./BookCards";
import Atomic_Habits from "../assets/temp_img/Atomic_Habits.jpg";
import David_Copperfield from "../assets/temp_img/David_Copperfield.jpg";
import Thinking_Fast_And_Slow from "../assets/temp_img/thinking_fast_and_slow.jpg";
import Psy_of_Money from "../assets/temp_img/psy_of_money.jpg";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import { Typography } from "@mui/material";
import BookOverview from "./BookOverview";

export default function HomePage() {
  let bookInfo = [
    { bookName: "Atomic Habits", bookImage: Atomic_Habits },
    { bookName: "David Copperfield", bookImage: David_Copperfield },
    { bookName: "Thinking Fast And Slow", bookImage: Thinking_Fast_And_Slow },
    { bookName: "Psychology of Money", bookImage: Psy_of_Money },
    { bookName: "David Copperfield", bookImage: David_Copperfield },
    { bookName: "David Copperfield", bookImage: David_Copperfield },
    { bookName: "David Copperfield", bookImage: David_Copperfield },
    { bookName: "David Copperfield", bookImage: David_Copperfield },
  ];
  return (
    <Box
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mx={"auto"}
      width={"80%"}
      marginTop="20px"
    >
      <Typography variant="h2" fontFamily={"Inconsolata"}>
        Welcome
      </Typography>
      <Typography fontFamily={"Inconsolata"}>
        Unlock the World of Imagination: Search, Discover, and Buy Books with
        Ease.
      </Typography>
      <SearchBar />
      <Stack
        direction="row"
        spacing={5}
        useFlexGap
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <BookCards bookData={bookInfo} />
      </Stack>
    </Box>
  );
}
