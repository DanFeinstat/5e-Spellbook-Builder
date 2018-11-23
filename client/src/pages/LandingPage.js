import React, { Component } from "react";
import "../App.css";
//Components
import ClassSelection from "../components/Search/ClassSelection";
import ClassSelBtn from "../components/Search/ClassSelBtn";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import LoginBtn from "../components/Login/LoginBtn";
import userAPI from "../utils/userAPI";
const jwt = require("jsonwebtoken");

class LandingPage extends Component {
  state = {
    id: "",
    searchActive: false,
    search: "",
    classList: null,
    spellFound: false,
    currentSpell: {},
  };

  componentDidMount() {
    if (localStorage.spellbookJwt) {
      this.decodeUserID();
    }
  }

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
                let desc = [];
                if (Array.isArray(data.desc)) {
                  for (let i = 0; i < data.desc.length; i++) {
                    const newDesc = data.desc[i]
                      .replace(/â€™/g, "'")
                      .replace(/â€“/g, "-")
                      .replace(/â€”/g, "-")
                      .replace(/â€œ/g, '"')
                      .replace(/â€�/g, '"');
                    desc.push(newDesc);
                  }
                } else {
                  let newDesc = data.desc
                    .replace(/â€™/g, "'")
                    .replace(/â€“/g, "-")
                    .replace(/â€”/g, "-")
                    .replace(/â€œ/g, '"')
                    .replace(/â€�/g, '"');
                  desc.push(newDesc);
                }
                const fixMaterialCharacters = data => {
                  if (data.material === undefined) {
                    return undefined;
                  } else if (
                    Array.isArray(data.material) &&
                    data.material.length > 1
                  ) {
                    let materials = [];
                    for (let i = 0; i < data.material.length; i++) {
                      const newMaterials = data.material[i]
                        .replace(/â€™/g, "'")
                        .replace(/â€œ/g, '"')
                        .replace(/â€�/g, '"');
                      materials.push(newMaterials);
                    }
                    return materials;
                  } else {
                    let newMaterials = data.material.replace(/â€™/g, "'");
                    return newMaterials;
                  }
                };
                let materials = fixMaterialCharacters(data);

                const spellData = {
                  name: data.name,
                  range: data.range,
                  duration: data.duration,
                  materials: materials,
                  ritual: data.ritual,
                  concentration: data.concentration,
                  components: data.components,
                  desc: desc,
                  higherLevel: data.higher_level,
                  school: data.school.name,
                  castingTime: data.casting_time,
                  level: data.level,
                };
                this.setState({
                  currentSpell: spellData,
                  spellFound: true,
                  searchActive: false,
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

  decodeUserID = () => {
    console.log(localStorage.spellbookJwt);
    const decoder = jwt.decode(localStorage.spellbookJwt);
    console.log(decoder);
    const decodedID = decoder.id;
    console.log(decodedID);
    this.setState({
      id: decodedID,
    });
  };

  //   saveSpellToSpellbook = e => {
  //     e.preventDefault();
  //     userAPI
  //       .addSpell(this.state.id, this.state.currentSpell)
  //       .then(response => console.log(response))
  //       .catch(err => console.log(err));
  //   };

  toSelectClass = e => {
    const newClass = e.target.textContent;
    this.setState({
      searchActive: true,
      classList: newClass,
      spellFound: false,
    });
  };

  returnToClassList = e => {
    e.preventDefault();
    this.setState({
      searchActive: false,
      classList: "",
      spellFound: false,
    });
  };

  toLogin = e => {
    e.preventDefault();
    window.location.href = "/signup";
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
      <div className={"App App-background-" + this.state.classList}>
        {this.state.searchActive ? (
          <Search
            inputChange={this.handleInputChange}
            onSubmit={this.onSpellSubmit}
            returnToClassSelect={this.returnToClassList}
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
        {this.state.spellFound ? (
          //   {this.state.id ?
          //    ( <Card
          //       spell={this.state.currentSpell}
          //       class={this.state.classList}
          //       loggedIn={this.state.id}
          //     />
          //   ) :
          <Card
            spell={this.state.currentSpell}
            class={this.state.classList}
            loggedIn={this.state.id}
            //   transcribe={this.saveSpellToSpellbook}
          />
        ) : null}
        {!this.state.id ? <LoginBtn login={this.toLogin} /> : null}
      </div>
    );
  }
}

export default LandingPage;
