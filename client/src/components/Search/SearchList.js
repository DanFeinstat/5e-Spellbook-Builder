import React from "react";
import "./SearchList.css";

const SearchList = props => {
  return (
    <div className="sL-container">
      {props.classSelected != null
        ? props.listofLists.map((level, index) => {
            // console.log(props.listofLists);
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
                  className="sL-level"
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
                            ? "sL-li"
                            : "sL-li sL-hidden"
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
