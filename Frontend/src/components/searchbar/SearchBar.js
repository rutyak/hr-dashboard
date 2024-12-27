import React from "react";
import FormPopover from "../form/FormPopover";
import { SearchIcon } from "../../assets/Icons";
import styles from "./SearchBar.module.css";

const SearchBar = ({ btnTitle, fields, onSubmit }) => {

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown}>
          <select>
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div className={styles.dropdown}>
          <select>
            <option value="all">All</option>
            <option value="filter1">Filter 1</option>
            <option value="filter2">Filter 2</option>
          </select>
        </div>
      </div>
      <div className={styles.inputBtn}>
        <div className={styles.searchInput}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <FormPopover
            btnTitle={btnTitle}
            fields={fields}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
