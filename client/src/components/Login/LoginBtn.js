import React from "react";
import styles from "./LoginBtn.module.css";

const LoginBtn = props => {
  return (
    <button className={styles.btn} onClick={props.onward}>
      {props.text}
    </button>
  );
};

export default LoginBtn;
