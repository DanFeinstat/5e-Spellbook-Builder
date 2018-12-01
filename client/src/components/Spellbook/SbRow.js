import React from "react";
import "./SbRow.css";

const SbRow = props => {
  return (
    <div>
      <h3 onClick={props.toggleList} className="sbr-h3">
        Spell Level: {props.level}
      </h3>
      <ul className="sbr-ul">{props.children}</ul>
    </div>
  );
};

export default SbRow;
