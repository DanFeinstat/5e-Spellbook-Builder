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
    currentSpell: {},
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  titleCase = str => {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };

  onSpellSubmit = e => {
    e.preventDefault();
    const queryURL =
      "http://www.dnd5eapi.co/api/spells/" +
      this.state.classList.toLowerCase() +
      "/";
    let spellName = this.state.search.trim();
    let toSubmit = this.titleCase(spellName);
    // console.log(toSubmit);
    // console.log(queryURL);
    fetch(queryURL)
      .then(response => response.json())
      .then(res => {
        // console.log(res);
        for (let i = 0; i < res.results.length; i++) {
          if (res.results[i].name === toSubmit) {
            console.log(res.results[i].url);
            fetch(res.results[i].url)
              .then(response => response.json())
              .then(data => {
                const spellData = {
                  name: data.name,
                  range: data.range,
                  duration: data.duration,
                  materials: data.materials,
                  ritual: data.ritual,
                  components: data.components,
                  desc: data.desc,
                  higherLevel: data.higher_level,
                  school: data.school.name,
                  castingTime: data.casting_time,
                };
                this.setState({
                  currentSpell: spellData,
                });
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
          <Search
            inputChange={this.handleInputChange}
            onSubmit={this.onSpellSubmit}
          />
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
