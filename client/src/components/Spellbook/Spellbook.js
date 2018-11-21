import React from "react";
import "./Spellbook.css";

const Spellbook = props => {
  return <div className="spellbook-container">{props.children}</div>;
};

export default Spellbook;
