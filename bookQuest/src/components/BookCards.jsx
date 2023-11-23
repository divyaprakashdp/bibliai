import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function BookCards(props) {
  console.log(props);
  let booksCard = props.bookData.map((book) => (
    <Card sx={{ maxWidth: 345, width: 240, height: 360 }} key={book.id}>
      <CardActionArea href={`overview/${book.volumeInfo.title}`}>
        <CardMedia
          component="img"
          width={"140px"}
          height="280"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {book.volumeInfo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return booksCard;
}
