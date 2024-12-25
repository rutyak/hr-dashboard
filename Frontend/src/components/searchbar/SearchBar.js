import React from "react";
import "./SearchBar.css";
import FormPopover from "../form/FormPopover";
import { SearchIcon } from "../../assets/Icons";

const SearchBar = ({btnTitle, fields, onSubmit}) => {
  return (
    <div className="search-bar-container">
      <div className="dropdown-container">
        <div className="dropdown">
          <select>
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div className="dropdown">
          <select>
            <option value="all">All</option>
            <option value="filter1">Filter 1</option>
            <option value="filter2">Filter 2</option>
          </select>
        </div>
      </div>
      <div className="input-btn">
        <div className="search-input">
          <SearchIcon/>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <FormPopover btnTitle={btnTitle} fields={fields} onSubmit={onSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
