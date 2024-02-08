import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import appIcon from "../assets/bookQuest_logo.svg";

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ background: "#333D2E" }}>
      <Toolbar variant="dense">
        <Button href="/">
          <Avatar src={appIcon} alt="logo" sx={{ width: 48, height: 48 }} />
        </Button>

        <Typography sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Typography
              variant="h3"
              component="div"
              color={"#fff"}
              fontFamily={"Inconsolata"}
            >
              BOOKQUEST
            </Typography>
          </Link>
        </Typography>

        <Stack direction={"row"} spacing={2}>
          <Button color="inherit" href="/recommendation">
            RECOMMENDATIONS
          </Button>
          <Button color="inherit"> MY BOOKS</Button>
          <Button color="inherit" href="/signIn">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
