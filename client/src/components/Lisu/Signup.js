import React from "react";
import styles from "./Signup.module.css";

const Signup = props => {
  return (
    <form className={styles.container}>
      <h1>Sign Up</h1>
      <div className={styles.inputGroup}>
        <label for="username">User Name</label>
        <input
          className={styles.input}
          maxlength="20"
          name="name"
          type="text"
          id="username"
          placeholder=" Drizzzzt, PunPun, etc..."
          onChange={props.inputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} for="email">
          Email
        </label>
        <input
          className={styles.input}
          maxlength="50"
          name="email"
          type="email"
          id="email"
          placeholder=" yourEmail@whatever.com"
          autoComplete="email"
          onChange={props.inputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} for="password">
          Password
        </label>
        <input
          className={styles.input}
          maxlength="20"
          name="password"
          type="password"
          id="password"
          placeholder=" 12345"
          autoComplete="current-password"
          onChange={props.inputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} for="confirmPassword">
          Confirm Password
        </label>
        <input
          className={styles.input}
          maxlength="20"
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          placeholder=" see above"
          onChange={props.inputChange}
        />
        <button onClick={props.signupSubmit} className={styles.submitBtn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Signup;
