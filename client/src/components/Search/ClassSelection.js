import React from "react";
import "./ClassSelection.css";

const ClassSelection = props => {
  return (
    <div className="cs-container">
      <p className="cs-title">Select a Class:</p>
      {props.children}
    </div>
  );
};

export default ClassSelection;
