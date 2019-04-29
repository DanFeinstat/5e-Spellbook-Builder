import React from "react";
import styles from "./SbRow.module.css";

const SbRow = props => {
  return (
    <div>
      <h3 onClick={props.toggleList} className={styles.h3}>
        Spell Level: {props.level}
      </h3>
      <ul className={styles.ul}>{props.children}</ul>
    </div>
  );
};

export default SbRow;
