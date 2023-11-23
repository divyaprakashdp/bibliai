import { Dialog, DialogTitle, Button, Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function BuyOptions(props) {
  const { onClose, selectedValue, open, bookName } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const flipkartLink = `https://www.flipkart.com/search?q=${bookName}`;
  const amazonLink = `https://www.amazon.in/s?k=${bookName}`;
  return (
    <Dialog onClose={handleClose} open={open} sx={{ padding: 5 }}>
      <DialogTitle>Buy Options</DialogTitle>
      <Grid spacing={8}>
        <Button
          size="small"
          variant="contained"
          sx={{ m: 2, background: "#2874F0" }}
          color="secondary"
          target="_blank"
          href={flipkartLink}
        >
          FlipKart
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ mr: 2, background: "#F3A847" }}
          color="secondary"
          target="_blank"
          href={amazonLink}
        >
          AMAZON
        </Button>
      </Grid>
    </Dialog>
  );
}

BuyOptions.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
};
