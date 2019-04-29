import React, { createContext } from "react";

const UserContext = createContext({
  // id:"",
  nameDisplayed: "",
  //   updatedId:() => {},
  updateNameDisplayed: () => {},
  //   updateUsername: () => {},
});

export default UserContext;

export class UserProvider extends React.Component {
  //   updateUsername = newUsername => {
  //     this.setState({ username: newUsername });
  //   };
  // updatedId = userId => {
  //     this.setState({id:userId})
  // }
  updatedNameDisplayed = newName => {
    this.setState({ nameDisplayed: newName });
  };

  state = {
    // id: '',
    nameDisplayed: "",
    updateNameDisplayed: this.updatedNameDisplayed,
    // updateUsername: this.updateUsername,
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
