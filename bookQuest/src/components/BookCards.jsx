import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function BookCards(props) {
  let booksCard = props.bookData.map((book) => (
    <Card sx={{ maxWidth: 345, width: 240, height: 360 }} key={book.bookName}>
      <CardActionArea href={`overview/${book.bookName}`}>
        <CardMedia
          component="img"
          width={"140px"}
          height="280"
          src={book.bookImage}
          alt={book.bookName}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {book.bookName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return booksCard;
}
