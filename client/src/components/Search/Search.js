import React from "react";
import "./Search.css";

const Search = props => {
  return (
    <form>
      <label>Mystic Tutor</label>
      <input
        name="search"
        type="text"
        className="search-input"
        id="spellNameInput"
        placeholder="Enter spell name here"
        onChange={props.inputChange}
      />
      <button className="search-submit">Submit</button>
    </form>
  );
};

export default Search;
