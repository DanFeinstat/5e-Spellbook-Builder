import React from "react";
import "./Search.css";

const Search = props => {
  return (
    <form className="search-container">
      {/* <div className="search-container"> */}
      <div className="search-sub-container">
        <span className="search-name">Mystic Tutor</span>
        {/* </div>
      <div className="search-container"> */}
        <input
          name="search"
          type="text"
          className="search-input"
          id="spellNameInput"
          placeholder="Enter spell name here"
          onChange={props.inputChange}
        />
        {/* </div>
      <div className="search-submit-container"> */}
        <button className="search-submit" onClick={props.onSubmit}>
          Submit
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default Search;
