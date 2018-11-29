import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../App.css";
//Components
import ClassSelection from "../components/Search/ClassSelection";
import ClassSelBtn from "../components/Search/ClassSelBtn";
import Search from "../components/Search/Search";
import SearchList from "../components/Search/SearchList";
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
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] !== "and" &&
        str[i] !== "or" &&
        str[i] !== "from" &&
        str[i] !== "into" &&
        str[i] !== "of" &&
        str[i] !== "with"
      ) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        for (let j = 0; j < str[i].length; j++) {
          // console.log(str[i].charAt(j));
          if (str[i].charAt(j) === "/") {
            str[i] =
              str[i].slice(0, j + 1) +
              str[i].charAt(j + 1).toUpperCase() +
              str[i].slice(j + 2);
          }
        }
      }
    }
    return str.join(" ");
  };
  toFetchSpell = e => {
    this.setState({ search: e.target.dataset.name }, this.toQuerySpellData);
  };
  onSpellSubmit = e => {
    e.preventDefault();
    this.toQuerySpellData();
  };
  toQuerySpellData = () => {
    const queryURL =
      "http://www.dnd5eapi.co/api/spells/" +
      this.state.classList.toLowerCase() +
      "/";
    let spellName = this.state.search.trim();
    let toSubmit = this.titleCase(spellName);
    console.log(toSubmit);
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
                this.setState(
                  {
                    currentSpell: spellData,
                    spellFound: true,
                    searchActive: false,
                  },
                  this.scrollToCard
                );
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

  scrollToCard = () => {
    let cardDiv = ReactDOM.findDOMNode(document.getElementById("scrollRefOne"));
    cardDiv.scrollIntoView({ behavior: "smooth", block: "start" }, true);
  };

  decodeUserID = () => {
    // console.log(localStorage.spellbookJwt);
    const decoder = jwt.decode(localStorage.spellbookJwt);
    // console.log(decoder);
    const decodedID = decoder.id;
    // console.log(decodedID);
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

  toSpellbook = e => {
    e.preventDefault();
    window.location.href = "/spellbook/user";
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
            page="landing"
            spell={this.state.currentSpell}
            class={this.state.classList}
            loggedIn={this.state.id}
            //   transcribe={this.saveSpellToSpellbook}
          />
        ) : null}
        <SearchList
          classSelected={this.state.classList}
          fetchSpell={this.toFetchSpell}
        />
        {!this.state.id ? (
          <LoginBtn text={"Log In"} onward={this.toLogin} />
        ) : (
          <LoginBtn text={"Spellbook"} onward={this.toSpellbook} />
        )}
      </div>
    );
  }
}

export default LandingPage;
