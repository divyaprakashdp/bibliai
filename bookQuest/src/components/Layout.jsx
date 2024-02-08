import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
// import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";

// const Wrapper = styled(div)(({ theme }) => ({
//   height: "100vh",
//   width: "100%",
//   paddingBottom: "10px",
//   //   backgroundImage: `url(
//   //     "https://source.unsplash.com/white-and-gray-floral-textile-XFWiZTa2Ub0"
//   //   )`,
//   background: "#F4F2E9",
//   [theme.breakpoints.down("md")]: {
//     // background: "orange",
//   },
//   [theme.breakpoints.down("sm")]: {
//     // background: "blue",
//   },
//   [theme.breakpoints.up("lg")]: {
//     // background: "purple",
//   },
// }));

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
