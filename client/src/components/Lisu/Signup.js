import React from "react";

const Signup = props => {
  return (
    <form>
      <div>
        <label for="username">User Name</label>
        <input
          name="name"
          type="text"
          id="username"
          placeholder="Drizzt'Don't'Urden, PunPun, etc..."
          onChange={props.inputChange}
        />
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

        <label for="confirmPassword">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          placeholder="12345"
          onChange={props.inputChange}
        />
        <button onClick={props.signupSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default Signup;
