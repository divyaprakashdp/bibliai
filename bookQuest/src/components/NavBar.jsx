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
import { UserAuth } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = UserAuth();

  //TODO
  const NavButtonForUSer = () => {
    return (
      <>
        <Button href="/recommendation">RECOMMENDATIONS</Button>
        <Button> MY BOOKS</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </>
    );
  };
  //TODO
  const LoginBtn = () => <Link to="/signIn">Login</Link>;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

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
          {user?.displayName ? <NavButtonForUSer /> : <LoginBtn />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
