import React, { Component } from "react";
import "./App.css";
//Components
import ClassSelection from "./components/Search/ClassSelection";
import ClassSelBtn from "./components/Search/ClassSelBtn";
import Search from "./components/Search/Search";

class App extends Component {
  state = {
    searchActive: false,
    search: "",
    classList: null,
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSpellSubmit = e => {};

  toSelectClass = e => {
    const newClass = e.target.textContent;
    this.setState({
      searchActive: true,
      classList: newClass,
    });
  };
  render() {
    const classes = [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Warlock",
      "Wizard",
    ];
    return (
      <div>
        {this.state.searchActive ? (
          <Search inputChange={this.handleInputChange} />
        ) : (
          <ClassSelection>
            {classes.map((value, index) => {
              return (
                <ClassSelBtn
                  selecClass={this.toSelectClass}
                  key={index}
                  name={value}
                />
              );
            })}
          </ClassSelection>
        )}
      </div>
    );
  }
}

export default App;
