import React from "react";
import styles from "./ClassSelBtn.module.css";

const ClassSelBtn = props => {
  return (
    <button
      onClick={props.selectClass}
      className={props.special ? styles.btnTutorial : styles.btn}
    >
      {props.name}
    </button>
  );
};

export default ClassSelBtn;
