import React from "react";
import "./LoginBtn.css";

const LoginBtn = props => {
  return (
    <button className="login-btn" onClick={props.login}>
      Log In
    </button>
  );
};

export default LoginBtn;
