import {
  Box,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import OverviewTab from "./OverviewTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BuyOptions from "./BuyOptions";

import { useEffect } from "react";

const bookPreview = `T

1

The Surprising Power of Atomic Habits
HE FATE OF British Cycling changed one day in 2003. The
organization, which was the governing body for professional
cycling in Great Britain, had recently hired Dave Brailsford as its new
performance director. At the time, professional cyclists in Great Britain
had endured nearly one hundred years of mediocrity. Since 1908,
British riders had won just a single gold medal at the Olympic Games,
and they had fared even worse in cycling’s biggest race, the Tour de
France. In 110 years, no British cyclist had ever won the event.
In fact, the performance of British riders had been so
underwhelming that one of the top bike manufacturers in Europe
refused to sell bikes to the team because they were afraid that it would
hurt sales if other professionals saw the Brits using their gear.
Brailsford had been hired to put British Cycling on a new trajectory.
What made him different from previous coaches was his relentless
commitment to a strategy that he referred to as “the aggregation of
marginal gains,” which was the philosophy of searching for a tiny
margin of improvement in everything you do. Brailsford said, “The
whole principle came from the idea that if you broke down everything
you could think of that goes into riding a bike, and then improve it by 1
percent, you will get a significant increase when you put them all
together.”
Brailsford and his coaches began by making small adjustments you
might expect from a professional cycling team. They redesigned the
bike seats to make them more comfortable and rubbed alcohol on the
tires for a better grip. They asked riders to wear electrically heated
overshorts to maintain ideal muscle temperature while riding and used

biofeedback sensors to monitor how each athlete responded to a
particular workout. The team tested various fabrics in a wind tunnel
and had their outdoor riders switch to indoor racing suits, which
proved to be lighter and more aerodynamic.`;

const bookReview = `It seems there is no review available for this book as of now. Maybe you will be able to add a review once you read the book.`;

export default function BookOverview() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [bookData, setBookData] = useState();
  // const [pageTitle, setPageTitle] = useState();

  const { book_id } = useParams();

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${book_Name}&orderBy=relevance&key=AIzaSyD_Hf_1_-268aWv_My3dR-peG6NE9yb2eQ`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBookData(data.items[0]);
  //     });
  // }, [book_Name]);

  useEffect(() => {
    console.log(`getting book for id - ${book_id}`); //bookid coming as undefined need a fix
    const savedBookData = sessionStorage.getItem("Book");
    console.log(
      "savedData",
      JSON.parse(savedBookData).find(
        (item) => item?.id === JSON.stringify(book_id)
      )
    );
    setBookData(JSON.parse(savedBookData).find((item) => item.id === book_id));
  }, []);

  useEffect(() => {
    console.log(`Books | ${bookData?.volumeInfo.title}`);
    document.title = `Books | ${bookData?.volumeInfo.title}`;
  }, [bookData]);

  const handleBuyOptions = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box mx={"auto"} marginTop="20px">
      {bookData ? (
        <Grid container direction="row" spacing={5}>
          <Grid item xs={12} sm={4} mt={10} ml={10} width="200px">
            <Card
              sx={{
                textAlign: "center",
                backgroundColor: "#bfe0c5",
                width: "200px",
              }}
              key={bookData.id}
            >
              <CardMedia
                component="img"
                height="400"
                sx={{ maxWidth: "100%", objectFit: "contain" }}
                src={bookData.volumeInfo.imageLinks.thumbnail}
                alt={bookData.volumeInfo.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {bookData.volumeInfo.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleBuyOptions}
                >
                  Buy
                </Button>
                <Button size="small" variant="contained">
                  Preview
                </Button>
                <BuyOptions
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                  bookName={bookData.volumeInfo.title}
                />
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <OverviewTab
              description={bookData.volumeInfo.description}
              summary={bookPreview}
              review={bookReview}
            />
          </Grid>
        </Grid>
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  );
}
