import React from "react";
import styles from "./Login.module.css";
import styles2 from "./Signup.module.css";

const Login = props => {
  return (
    <form className={styles.container}>
      <h1>Log In</h1>
      <div className={styles2.inputGroup}>
        <label for="email">Email</label>
        <input
          className={styles.input}
          name="email"
          type="email"
          id="email"
          placeholder=" yourEmail@whatever.com"
          autoComplete="email"
          onChange={props.inputChange}
        />
      </div>
      <div className={styles2.inputGroup}>
        <label className={styles.label} for="login-password">
          Password
        </label>
        <input
          className={styles.input}
          name="password"
          type="password"
          id="login-password"
          placeholder=" admin"
          autoComplete="current-password"
          onChange={props.inputChange}
        />
        <button onClick={props.loginSubmit} className={styles2.submitBtn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
