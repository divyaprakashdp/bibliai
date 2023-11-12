import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function BookCards(props) {
  let booksCard = props.bookData.map((a) => (
    <Card sx={{ maxWidth: 345, width: 240, height: 360 }} key={a.bookName}>
      <CardActionArea href={`overview/1`}>
        <Link to={`overview/1`}></Link>
        <CardMedia
          component="img"
          width={"140px"}
          height="280"
          src={a.bookImage}
          alt="Atomic Habits"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {a.bookName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return booksCard;
}
