import React from "react";
import styles from "./Spellbook.module.css";

const Spellbook = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Spellbook;
