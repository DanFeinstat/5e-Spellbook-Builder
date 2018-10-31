import React from "react";
import "./ClassSelection.css";

const ClassSelection = props => {
  return (
    <div>
      <p>Please select a Class:</p>
      {props.children}
    </div>
  );
};

export default ClassSelection;
