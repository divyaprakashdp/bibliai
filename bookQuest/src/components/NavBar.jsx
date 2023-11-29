import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { createSvgIcon } from "@mui/material";
// import appIcon from "/bookQuest_logo.svg";

// const icon = createSvgIcon([appIcon], "Plus");

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {/* <SvgIcon component={appIcon}></SvgIcon> */}
        <Link to="/">
          <Typography variant="h6" component="div" color={"beige"}>
            BOOKQUEST
          </Typography>
        </Link>

        <Button color="inherit">RECOMMENDATIONS</Button>
        <Button color="inherit"> MY BOOKS</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
