import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  paddingBottom: "10px",
  //   backgroundImage: `url(
  //     "https://source.unsplash.com/white-and-gray-floral-textile-XFWiZTa2Ub0"
  //   )`,
  background: "#F4F2E9",
  backgroundSize: "cover",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    // background: "orange",
  },
  [theme.breakpoints.down("sm")]: {
    // background: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    // background: "purple",
  },
}));

export default function Layout() {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
    </Wrapper>
  );
}
