import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "../App.css";
import styles from "./Pages.module.css";
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
        str[i] !== "without" &&
        str[i] !== "with"
      ) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        for (let j = 0; j < str[i].length; j++) {
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
    this.setState({ search: e.target.dataset.name }, this.querySpellData);
  };
  onSpellSubmit = e => {
    e.preventDefault();
    const betterSearch = this.titleCase(this.state.search.trim());
    this.setState(
      {
        search: betterSearch,
      },
      this.querySpellData
    );
  };

  querySpellData = () => {
    let spellName = this.state.search.trim();
    spellAPI.findSpell(spellName).then(response => {
      if (response.data.length > 0) {
        let data = response.data[0].data;
        let comps = data.components.split(", ");
        let newLevel =
          data.level !== "Cantrip" ? parseInt(data.level.charAt(0)) : 0;
        const spellData = {
          name: data.name,
          range: data.range,
          duration: data.duration,
          materials: data.material,
          ritual: data.ritual,
          concentration: data.concentration,
          components: comps,
          desc: data.desc,
          school: data.school,
          castingTime: data.casting_time,
          level: newLevel,
        };
        this.setState({
          currentSpell: spellData,
          spellFound: true,
          searchActive: false,
        });
      } else {
        alert(
          "Spell could not be found as written.  Make sure the words/characters are correct or check the lists below."
        );
      }
    });
  };

  decodeUserID = () => {
    const decoder = jwt.decode(localStorage.spellbookJwt);
    const decodedID = decoder.id;
    this.setState(
      {
        id: decodedID,
      },
      this.updateUserData
    );
  };

  updateUserData = () => {
    if (this.state.id !== "") {
      userAPI.getSpells(this.state.id).then(response => {
        this.setState({
          names: response.data.names,
        });
      });
    }
  };

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
      <div
        className={`${styles.App} ${
          styles[`background${this.state.classList}`]
        }`}
      >
        <div className={styles.landingSearchContainer}>
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
                    selectClass={this.getClassList}
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
            <h2 className={styles.landingTutorialContent}>
              Welcome to the 5e Spellbook!
            </h2>
            <p className={styles.landingTutorialContent}>
              Below is an example spell card that demonstrates the layout and
              icons used. The "Transcribe" button at the bottom will only show
              up if you're logged in. It allows you to save the spell to a
              personal spellbook.
            </p>
            <TutorialCard />
            <p className={styles.landingTutorialContent2}>
              To get started, select a class at the top of the page, or hit the
              "Log In" button in the bottom right of the screen.
            </p>
          </React.Fragment>
        ) : !this.state.classList && !this.state.tutorial ? (
          <h1 className={styles.landingSplash}>Welcome to the 5e Spellbook!</h1>
        ) : null}
        {reArrange ? (
          <div className={styles.landingContentContainer}>
            {this.state.spellFound ? (
              <Card
                page="landing"
                spell={this.state.currentSpell}
                username={this.state.names[0]}
                class={this.state.classList}
                loggedIn={this.state.id}
                scrollActive={reArrange}
              />
            ) : null}
            <SearchList
              listofLists={this.state.listofLists}
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
            <div className={styles.landingListContainer}>
              <SearchList
                listofLists={this.state.listofLists}
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
            <div className={styles.landingCardContainer}>
              {this.state.spellFound ? (
                <Card
                  page="landing"
                  spell={this.state.currentSpell}
                  class={this.state.classList}
                  username={this.state.names[0]}
                  loggedIn={this.state.id}
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
