import React from "react";
import "./ClassSelBtn.css";

const ClassSelBtn = props => {
  return (
    <button onClick={props.selecClass} className="cs-btn">
      {props.name}
    </button>
  );
};

export default ClassSelBtn;
