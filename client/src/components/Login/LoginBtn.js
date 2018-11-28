import React from "react";
import "./LoginBtn.css";

const LoginBtn = props => {
  return (
    <button className="login-btn" onClick={props.onward}>
      {props.text}
    </button>
  );
};

export default LoginBtn;
