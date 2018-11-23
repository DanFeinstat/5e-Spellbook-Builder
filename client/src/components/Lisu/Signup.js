import React from "react";
import "./Signup.css";

const Signup = props => {
  return (
    <form className="signup-container">
      <h1>Sign Up</h1>
      <div className="signup-input-group">
        <label for="username">User Name</label>
        <input
          className="signup-input"
          maxlength="20"
          name="name"
          type="text"
          id="username"
          placeholder=" Drizzzzt, PunPun, etc..."
          onChange={props.inputChange}
        />
      </div>
      <div className="signup-input-group">
        <label className="signup-label" for="email">
          Email
        </label>
        <input
          className="signup-input"
          maxlength="50"
          name="email"
          type="email"
          id="email"
          placeholder=" yourEmail@whatever.com"
          autoComplete="email"
          onChange={props.inputChange}
        />
      </div>
      <div className="signup-input-group">
        <label className="signup-label" for="password">
          Password
        </label>
        <input
          className="signup-input"
          maxlength="20"
          name="password"
          type="password"
          id="password"
          placeholder=" 12345"
          autoComplete="current-password"
          onChange={props.inputChange}
        />
      </div>
      <div className="signup-input-group">
        <label className="signup-label" for="confirmPassword">
          Confirm Password
        </label>
        <input
          className="signup-input"
          maxlength="20"
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          placeholder=" see above"
          onChange={props.inputChange}
        />
        <button onClick={props.signupSubmit} className="signup-submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Signup;
