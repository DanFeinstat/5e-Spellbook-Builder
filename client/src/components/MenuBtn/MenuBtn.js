import React from "react";
import styles from "./MenuBtn.module.css";

const MenuBtn = props => {
  return (
    <div className={styles.container} onClick={props.toggleShape}>
      <div
        className={
          props.active ? `${styles.changeOne} ${styles.barOne}` : styles.barOne
        }
      />
      <div
        className={
          props.active ? `${styles.changeTwo} ${styles.barTwo}` : styles.barTwo
        }
      />
      <div
        className={
          props.active
            ? `${styles.changeThree} ${styles.barThree}`
            : styles.barThree
        }
      />
      {props.children}
    </div>
  );
};

export default MenuBtn;
