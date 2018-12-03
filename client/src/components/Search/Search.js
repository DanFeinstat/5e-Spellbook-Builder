import React from "react";
import "./Search.css";

const Search = props => {
  return (
    <form className="search-container">
      <div className="search-sub-container">
        <span className="search-name">Mystic Tutor</span>
        <input
          name="search"
          type="text"
          className="search-input"
          id="spellNameInput"
          placeholder="Enter spell name here"
          onChange={props.inputChange}
        />
        <button className="search-submit" onClick={props.onSubmit}>
          Submit
        </button>
        <button className="search-back" onClick={props.returnToClassSelect}>
          Back
        </button>
      </div>
    </form>
  );
};

export default Search;
