import React, { Component } from "react";
import Signup from "../components/Lisu/Signup";
import Login from "../components/Lisu/Login";
import LoginBtn from "../components/Login/LoginBtn";
import userAPI from "../utils/userAPI";
import styles from "./Pages.module.css";

class SignupPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSignupSubmit = e => {
    e.preventDefault();
    if (!this.state.name) {
      return alert("Please enter a name.");
    } else if (!this.state.email) {
      return alert("Please enter an email address for your username");
    } else if (!this.state.password) {
      return alert("Please enter a password.");
    } else if (!this.state.confirmPassword) {
      return alert("Please confirm your password.");
    } else if (this.state.password !== this.state.confirmPassword) {
      return alert("Your passwords do not match");
    }
    const userData = {
      names: [this.state.name],
      email: this.state.email,
      password: this.state.password,
      spellbooks: [{ name: this.state.name }],
    };
    // console.log(userData);
    userAPI.createUser(userData).then(response => {
      // console.log(response);
      const userData = {
        email: this.state.email,
        password: this.state.password,
      };

      userAPI.login(userData).then(response => {
        console.log(response);
        localStorage.setItem("spellbookJwt", response.data.spellbookJwt);
        window.location.href = "/spellbook/user";
      });
    });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    userAPI.login(userData).then(response => {
      // console.log(response);
      localStorage.setItem("spellbookJwt", response.data.spellbookJwt);
      window.location.href = "/spellbook/user";
    });
  };

  toLanding = () => {
    window.location.href = "/";
  };
  render() {
    return (
      <div className={styles.signupContainer}>
        <Login
          inputChange={this.handleInputChange}
          loginSubmit={this.handleLoginSubmit}
        />
        <Signup
          inputChange={this.handleInputChange}
          signupSubmit={this.handleSignupSubmit}
        />
        <LoginBtn text="Back" onward={this.toLanding} />
      </div>
    );
  }
}

export default SignupPage;
