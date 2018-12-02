import React from "react";
import "./ClassSelBtn.css";

const ClassSelBtn = props => {
  return (
    <button
      onClick={props.selectClass}
      // onClick={props.test}
      className={props.special ? "cs-btn-tutorial" : "cs-btn"}
    >
      {props.name}
    </button>
  );
};

export default ClassSelBtn;
