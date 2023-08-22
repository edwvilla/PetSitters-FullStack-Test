import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchContainer from "../SearchContainer/SearchContainer";

import { useDispatch } from "react-redux";
import { search } from "../../store/reducers/searchSlice";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const handleSearchInput = (event) => {
    dispatch(search(event.target.value));
    setSearchInput(event.target.value);
  };

  return (
    <TextField
      sx={{ flexGrow: 4 }}
      id="search"
      label="Buscar cuidador"
      variant="filled"
      value={searchInput}
      onChange={handleSearchInput}
    />
  );
}
