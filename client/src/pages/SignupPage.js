import React, { Component } from "react";
import Signup from "../components/Lisu/Signup";
import userAPI from "../utils/userAPI";

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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
    userAPI.createUser(userData).then(response => {
      console.log(response.data.spellbookJwt);
      localStorage.setItem("spellbookJwt", response.data.spellbookJwt);
    });
  };
  render() {
    return (
      <div>
        <Signup
          inputChange={this.handleInputChange}
          signupSubmit={this.handleSignupSubmit}
        />
      </div>
    );
  }
}

export default SignupPage;
