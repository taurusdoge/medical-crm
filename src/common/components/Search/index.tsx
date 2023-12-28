import { useEffect, useState } from "react";
import { Input } from "../Input";
import "./styles.css";
import { IconSearch } from "../Icons/IconSearch";
import { IconMenu } from "../Icons/IconMenu";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    // TODO: debounce this
    console.log("searching for: ", searchTerm);
  }, [searchTerm]);

  return (
    <span className="search">
      <IconSearch />
      <Input
        value={searchTerm}
        placeholder="Search"
        setValue={setSearchTerm}
        className="search__input"
      />
      <IconMenu />
    </span>
  );
};
