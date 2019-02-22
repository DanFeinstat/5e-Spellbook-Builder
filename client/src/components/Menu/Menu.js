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
                    data-name={value}
                    className={
                      index === 0
                        ? `${styles.mContentItem} ${styles.mBorderTop}`
                        : `${styles.mContentItem}`
                    }
                    onClick={props.chooseBook}
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
          ) : props.creatingNewBook ? (
            <div className={styles.mGridContainer} onClick={props.stopProp}>
              <div className={styles.mGridTitle}>Book Name</div>
              <input
                className={styles.mGridInput}
                onClick={props.stopProp}
                onChange={props.handleInputChange}
                data-name={`newBookName`}
              />

              <div className={styles.mBookFormBtn1} onClick={props.newBook}>
                Submit
              </div>
              <div
                className={styles.mBookFormBtn2}
                onClick={props.toggleBookForm}
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
              <div
                className={styles.mContentItem}
                onClick={props.toggleBookForm}
              >
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
