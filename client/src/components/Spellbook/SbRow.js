import React from "react";
import "./SbRow.css";

const SbRow = props => {
  return (
    <div>
      <h3>Spell Level: {props.level}</h3>
      <ul>{props.children}</ul>
    </div>
  );
};

export default SbRow;
