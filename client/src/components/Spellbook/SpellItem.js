import React from "react";
import styles from "./SpellItem.module.css";

const SpellItem = props => {
  return (
    <div
      className={styles.container}
      data-name={props.name}
      onClick={props.spellToDisplay}
    >
      <div data-name={props.name}>{props.name}</div>
      <div data-name={props.name}>{props.school}</div>
      <div data-name={props.name}>Level: {props.level}</div>
    </div>
  );
};

export default SpellItem;
