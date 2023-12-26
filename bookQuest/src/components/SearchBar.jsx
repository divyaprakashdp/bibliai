import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import PropTypes from "prop-types";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha("#333D2E", 0.2),
  "&:hover": {
    backgroundColor: alpha("#333D2E", 0.5),
  },
  marginRight: 0,
  marginLeft: 0,
  marginBottom: theme.spacing(10),
  marginTop: theme.spacing(10),
  width: "100%",
  height: "60px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

export default function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      // Make an API call with the search input
      console.log(searchInput);
      onSearch(searchInput);
    }
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <IconButton color="primary" aria-label="add to shopping cart">
            <SearchOutlinedIcon />
          </IconButton>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search a book/author/topic..."
          inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyDown={handleSearch}
        />
      </Search>
    </>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
