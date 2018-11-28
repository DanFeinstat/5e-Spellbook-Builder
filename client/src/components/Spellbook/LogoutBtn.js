import React from "react";
import "./LogoutBtn.css";

const LogoutBtn = props => {
  return (
    <button className="logout-btn" onClick={props.logout}>
      {props.text}
    </button>
  );
};

export default LogoutBtn;
