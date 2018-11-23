import React from "react";
import "./LogoutBtn.css";

const LogoutBtn = props => {
  return (
    <button className="logout-btn" onClick={props.logout}>
      Log Out
    </button>
  );
};

export default LogoutBtn;
