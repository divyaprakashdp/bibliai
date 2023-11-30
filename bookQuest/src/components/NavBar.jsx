import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/bookQuest_logo.svg";

// import { createSvgIcon } from "@mui/material";
// import appIcon from "/bookQuest_logo.svg";

// const icon = createSvgIcon([appIcon], "Plus");

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Button href="/">
          <Avatar src={logo} alt="logo" sx={{ width: 48, height: 48 }} />
        </Button>

        <Typography sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Typography variant="h6" component="div" color={"beige"}>
              BOOKQUEST
            </Typography>
          </Link>
        </Typography>

        <Stack direction={"row"} spacing={2}>
          <Button color="inherit" href="/recommendation">
            RECOMMENDATIONS
          </Button>
          <Button color="inherit"> MY BOOKS</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
