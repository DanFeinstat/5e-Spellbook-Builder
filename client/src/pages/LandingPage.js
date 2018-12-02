import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "../App.css";
import "./Pages.css";
//Components
import ClassSelection from "../components/Search/ClassSelection";
import ClassSelBtn from "../components/Search/ClassSelBtn";
import Search from "../components/Search/Search";
import SearchList from "../components/Search/SearchList";
import Card from "../components/Card/Card";
import TutorialCard from "../components/Card/TutorialCard";
import LoginBtn from "../components/Login/LoginBtn";
import userAPI from "../utils/userAPI";
import spellAPI from "../utils/spellAPI";
// import cardTutorial from "../utils/dataObjects/cardTutorial";
const jwt = require("jsonwebtoken");

class LandingPage extends Component {
  state = {
    id: "",
    names: [],
    width: window.innerWidth,
    searchActive: false,
    search: "",
    classList: null,
    spellFound: false,
    currentSpell: {},
    listofLists: [],
    tutorial: false,
    level0: false,
    level1: false,
    level2: false,
    level3: false,
    level4: false,
    level5: false,
    level6: false,
    level7: false,
    level8: false,
    level9: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    if (localStorage.spellbookJwt) {
      this.decodeUserID();
    }
  }
  componentDidUpdate() {
    if (localStorage.spellbookJwt && !this.state.id) {
      this.decodeUserID();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
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
    // console.log(toSubmit);
    // console.log(queryURL);
    fetch(queryURL)
      .then(response => response.json())
      .then(res => {
        // console.log(res);
        for (let i = 0; i < res.results.length; i++) {
          if (res.results[i].name === toSubmit) {
            // console.log(res.results[i].url);
            fetch(res.results[i].url)
              .then(response => response.json())
              .then(data => {
                console.log(data);
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
                  }
                  // this.scrollToCard
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

  // scrollToCard = () => {
  //   let cardDiv = ReactDOM.findDOMNode(document.getElementById("scrollRefOne"));
  //   cardDiv.scrollIntoView({ behavior: "smooth", block: "start" }, true);
  // };

  decodeUserID = () => {
    // console.log(localStorage.spellbookJwt);
    const decoder = jwt.decode(localStorage.spellbookJwt);
    // console.log(decoder);
    const decodedID = decoder.id;
    // console.log(decodedID);
    this.setState(
      {
        id: decodedID,
      },
      this.updateUserData
    );
  };

  updateUserData = () => {
    userAPI.getSpells(this.state.id).then(response => {
      this.setState({
        names: response.data.names,
      });
    });
  };

  //   saveSpellToSpellbook = e => {
  //     e.preventDefault();
  //     userAPI
  //       .addSpell(this.state.id, this.state.currentSpell)
  //       .then(response => console.log(response))
  //       .catch(err => console.log(err));
  //   };

  // toSelectClass = e => {
  //   const newClass = e.target.textContent;
  //   this.setState({
  //     searchActive: true,
  //     classList: newClass,
  //     spellFound: false,
  //   });
  // };

  returnToClassList = e => {
    e.preventDefault();
    this.setState({
      searchActive: false,
      classList: null,
      spellFound: false,
      level0: false,
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: false,
      level6: false,
      level7: false,
      level8: false,
      level9: false,
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

  toggleLevelList = e => {
    const level = e.target.dataset.level;
    this.setState(prevState => ({
      [level]: !prevState[level],
    }));
  };

  toggleTutorial = e => {
    this.setState(prevState => ({
      tutorial: !prevState.tutorial,
    }));
  };

  getClassList = e => {
    let newClass = e.target.textContent;
    spellAPI
      .getClassList(newClass)
      .then(response => {
        console.log(response);
        let listofLists = [];
        let level0 = [];
        let level1 = [];
        let level2 = [];
        let level3 = [];
        let level4 = [];
        let level5 = [];
        let level6 = [];
        let level7 = [];
        let level8 = [];
        let level9 = [];
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].data.level === "Cantrip") {
            level0.push(response.data[i]);
          } else {
            let levelnum = response.data[i].data.level.charAt(0);
            eval("level" + levelnum).push(response.data[i]);
          }
        }
        if (level0.length >= 1) {
          listofLists.push(level0);
        }
        if (level1.length >= 1) {
          listofLists.push(level1);
        }
        if (level2.length >= 1) {
          listofLists.push(level2);
        }
        if (level3.length >= 1) {
          listofLists.push(level3);
        }
        if (level4.length >= 1) {
          listofLists.push(level4);
        }
        if (level5.length >= 1) {
          listofLists.push(level5);
        }
        if (level6.length >= 1) {
          listofLists.push(level6);
        }
        if (level7.length >= 1) {
          listofLists.push(level7);
        }
        if (level8.length >= 1) {
          listofLists.push(level8);
        }
        if (level9.length >= 1) {
          listofLists.push(level9);
        }
        console.log(listofLists);
        this.setState({
          searchActive: true,
          classList: newClass,
          spellFound: false,
          listofLists: listofLists,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const reArrange = this.state.width <= 899;
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
        <div className="pages-landing-search-container">
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
                    // selectClass={this.toSelectClass}
                    test={this.getClassList}
                    key={index}
                    name={value}
                  />
                );
              })}
              {!this.state.classList ? (
                <ClassSelBtn
                  name="Tutorial"
                  special="cs-btn-tutorial"
                  selectClass={this.toggleTutorial}
                />
              ) : null}
            </ClassSelection>
          )}
        </div>
        {!this.state.classList && this.state.tutorial ? (
          <React.Fragment>
            <h2 className="pages-landing-tutorial-content">
              Welcome to the 5e Spellbook!
            </h2>
            <p className="pages-landing-tutorial-content">
              Below is an example spell card that demonstrates the layout and
              icons used. The "Transcribe" button at the bottom will only show
              up if you're logged in. It allows you to save the spell to a
              personal spellbook.
            </p>
            <TutorialCard />
            <p className="pages-landing-tutorial-content2">
              To get started, select a class at the top of the page, or hit the
              "Log In" button in the bottom right of the screen.
            </p>
          </React.Fragment>
        ) : !this.state.classList && !this.state.tutorial ? (
          <h1 className="pages-landing-splash">Welcome to the 5e Spellbook!</h1>
        ) : null}
        {reArrange ? (
          <div className="pages-landing-content-container">
            {this.state.spellFound ? (
              <Card
                page="landing"
                spell={this.state.currentSpell}
                username={this.state.names[0]}
                class={this.state.classList}
                loggedIn={this.state.id}
                scrollActive={reArrange}
                //   transcribe={this.saveSpellToSpellbook}
              />
            ) : null}
            <SearchList
              toggleList={this.toggleLevelList}
              classSelected={this.state.classList}
              fetchSpell={this.toFetchSpell}
              level0={this.state.level0}
              level1={this.state.level1}
              level2={this.state.level2}
              level3={this.state.level3}
              level4={this.state.level4}
              level5={this.state.level5}
              level6={this.state.level6}
              level7={this.state.level7}
              level8={this.state.level8}
              level9={this.state.level9}
            />
          </div>
        ) : (
          <div>
            <div className="pages-landing-list-container">
              <SearchList
                toggleList={this.toggleLevelList}
                classSelected={this.state.classList}
                fetchSpell={this.toFetchSpell}
                level0={this.state.level0}
                level1={this.state.level1}
                level2={this.state.level2}
                level3={this.state.level3}
                level4={this.state.level4}
                level5={this.state.level5}
                level6={this.state.level6}
                level7={this.state.level7}
                level8={this.state.level8}
                level9={this.state.level9}
              />
            </div>
            <div className="pages-landing-card-container">
              {this.state.spellFound ? (
                <Card
                  page="landing"
                  spell={this.state.currentSpell}
                  class={this.state.classList}
                  username={this.state.names[0]}
                  loggedIn={this.state.id}
                  //   transcribe={this.saveSpellToSpellbook}
                />
              ) : null}
            </div>
          </div>
        )}
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
