import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function BookCards(props) {
  console.log(props.bookData);
  props.bookData.map((a) => {
    console.log(a.bookName);
    console.log(a.bookImage);
  });
  let booksCard = props.bookData.map((a) => (
    <Card sx={{ maxWidth: 345, width: 240, height: 360 }} key={a.bookName}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={"140px"}
          height="280"
          src={a.bookImage}
          alt="Atomic Habits"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {a.bookName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return booksCard;
}
