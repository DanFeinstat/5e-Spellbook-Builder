import React from "react";

const Login = props => {
  return (
    <form>
      <div>
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="yourEmailAddress@whatever.com"
          autoComplete="email"
          onChange={props.inputChange}
        />
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="12345"
          autoComplete="current-password"
          onChange={props.inputChange}
        />
        <button onClick={props.handleLoginSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default Login;
