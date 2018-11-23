import React from "react";
import "./Signup.css";
import "./Login.css";

const Login = props => {
  return (
    <form className="login-container">
      <h1>Log In</h1>
      <div className="signup-input-group">
        <label for="email">Email</label>
        <input
          className="login-input"
          name="email"
          type="email"
          id="email"
          placeholder=" yourEmail@whatever.com"
          autoComplete="email"
          onChange={props.inputChange}
        />
      </div>
      <div className="signup-input-group">
        <label className="login-label" for="login-password">
          Password
        </label>
        <input
          className="login-input"
          name="password"
          type="password"
          id="login-password"
          placeholder=" admin"
          autoComplete="current-password"
          onChange={props.inputChange}
        />
        <button onClick={props.loginSubmit} className="signup-submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
