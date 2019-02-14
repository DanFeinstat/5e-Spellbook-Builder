import React from "react";
// import { Transition, animated } from "react-spring/renderprops";
import styles from "./Menu.module.css";

const Menu = props => {
  return (
    <span className={styles.position}>
      <div className={`${styles.mBubble} ${styles.mBottom}`}>
        <div className={styles.mContent}>
          <div className={styles.mContentContainer}>
            <div
              className={`${styles.mContentItem} ${styles.mBorderTop}`}
              onClick={props.spellSearch}
            >
              Spell Search
            </div>
            <div className={styles.mContentItem} onClick={props.newBook}>
              New Book
            </div>
            <div className={styles.mContentItem}>Change Theme</div>
            <div className={styles.mContentItem} onClick={props.logout}>
              Log Out
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Menu;
