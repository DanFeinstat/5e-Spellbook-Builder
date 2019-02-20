import React from "react";
// import { Transition, animated } from "react-spring/renderprops";
import styles from "./Menu.module.css";

const Menu = props => {
  return (
    <span className={styles.position}>
      <div className={`${styles.mBubble} ${styles.mBottom}`}>
        <div className={styles.mContent}>
          {props.bookMenuActive ? (
            <div className={styles.mContentContainer}>
              {props.names.map((value, index) => {
                return (
                  <div
                    key={index}
                    data-bookName={value}
                    className={
                      index === 0
                        ? `${styles.mContentItem} ${styles.mBorderTop}`
                        : `${styles.mContentItem}`
                    }
                    // onClick={props.chooseBook}
                  >
                    {value}
                  </div>
                );
              })}
              <div
                className={`${styles.mContentItem}`}
                onClick={props.toggleBookMenu}
              >
                Back
              </div>
            </div>
          ) : (
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
              <div
                className={styles.mContentItem}
                onClick={props.toggleBookMenu}
              >
                Change Book
              </div>
              <div className={styles.mContentItem} onClick={props.logout}>
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </span>
  );
};

export default Menu;
