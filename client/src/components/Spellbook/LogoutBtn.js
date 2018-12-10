import React from "react";
import styles from "./LogoutBtn.module.css";

const LogoutBtn = props => {
  return (
    <button className={styles.btn} onClick={props.logout}>
      {props.text}
    </button>
  );
};

export default LogoutBtn;
