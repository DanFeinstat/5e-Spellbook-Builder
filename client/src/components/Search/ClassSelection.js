import React from "react";
import styles from "./ClassSelection.module.css";

const ClassSelection = props => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Select a Class:</p>
      {props.children}
    </div>
  );
};

export default ClassSelection;
