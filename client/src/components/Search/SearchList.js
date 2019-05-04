import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

import styles from "./SearchList.module.css";

class SearchList extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.classSelected != null
          ? this.props.listofLists.map((level, index) => {
              let listNumber = index;
              let spellLevel =
                this.props.classSelected !== "Paladin" &&
                this.props.classSelected !== "Ranger"
                  ? index === 0
                    ? "Cantrip"
                    : index
                  : index + 1;
              let spellList = "level" + listNumber;
              return level.length ? (
                <React.Fragment>
                  <h4
                    className={styles.level}
                    onClick={this.props.toggleList}
                    data-level={"level" + listNumber}
                  >
                    Spell Level: {spellLevel}
                  </h4>
                  <ul key={listNumber}>
                    {this.props[`level${listNumber}`]
                      ? level.map((list, index) => {
                          // const toggleKey = "level" + listNumber;
                          return (
                            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                              {props => (
                                <li
                                  className={
                                    // props[toggleKey] === true
                                    // ?
                                    styles.li
                                    // : `${styles.li} ${styles.hidden}`
                                  }
                                  style={props}
                                  key={index}
                                  data-name={list.data.name}
                                  onClick={this.props.fetchSpell}
                                >
                                  {list.data.name}
                                </li>
                              )}
                            </Spring>
                          );
                        })
                      : null}
                  </ul>
                </React.Fragment>
              ) : null;
            })
          : null}
      </div>
    );
  }
}

export default SearchList;
