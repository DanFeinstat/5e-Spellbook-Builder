import React from "react";
import styles from "./Search.module.css";

const Search = props => {
  return (
    <form className={styles.container}>
      <div className={styles.subContainer}>
        <span className={styles.name}>Mystic Tutor</span>
        <input
          name="search"
          type="text"
          className={styles.input}
          id="spellNameInput"
          placeholder="Enter spell name here"
          onChange={props.inputChange}
        />
        <button className={styles.submit} onClick={props.onSubmit}>
          Submit
        </button>
        <button className={styles.back} onClick={props.returnToClassSelect}>
          Back
        </button>
      </div>
    </form>
  );
};

export default Search;
