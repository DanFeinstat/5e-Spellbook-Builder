import React from "react";
import styles from "./SearchList.module.css";

const SearchList = props => {
  return (
    <div className={styles.container}>
      {props.classSelected != null
        ? props.listofLists.map((level, index) => {
            let listNumber = index;
            let spellLevel =
              props.classSelected !== "Paladin" &&
              props.classSelected !== "Ranger"
                ? index === 0
                  ? "Cantrip"
                  : index
                : index + 1;
            let spellList = "level" + listNumber;
            return level.length ? (
              <React.Fragment>
                <h4
                  className={styles.level}
                  onClick={props.toggleList}
                  data-level={"level" + listNumber}
                >
                  Spell Level: {spellLevel}
                </h4>
                <ul key={listNumber}>
                  {level.map((list, index) => {
                    const toggleKey = "level" + listNumber;
                    return (
                      <li
                        className={
                          props[toggleKey] === true
                            ? styles.li
                            : `${styles.li} ${styles.hidden}`
                        }
                        key={index}
                        data-name={list.data.name}
                        onClick={props.fetchSpell}
                      >
                        {list.data.name}
                      </li>
                    );
                  })}
                </ul>
              </React.Fragment>
            ) : null;
          })
        : null}
    </div>
  );
};

export default SearchList;
