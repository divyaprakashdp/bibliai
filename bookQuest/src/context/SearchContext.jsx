import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <SearchContext.Provider value={[searchInput, setSearchInput]}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
