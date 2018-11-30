import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import SpellItem from "../components/Spellbook/SpellItem";
import Spellbook from "../components/Spellbook/Spellbook";
import Card from "../components/Card/Card";
import "./Pages.css";
import LogoutBtn from "../components/Spellbook/LogoutBtn";
import SbRow from "../components/Spellbook/SbRow";
const jwt = require("jsonwebtoken");

class SpellbookPage extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    spells: [],
    listsByLevels: [],
    spellToDisplay: "",
    levelToDisplay: "",
  };

  componentDidMount() {
    console.log("loaded");
    this.decodeUserIDandPopulate();
  }

  //   componentDidUpdate() {

  //   }

  decodeUserIDandPopulate = () => {
    console.log(localStorage.spellbookJwt);
    const decoder = jwt.decode(localStorage.spellbookJwt);
    console.log(decoder);
    const decodedID = decoder.id;
    console.log(decodedID);
    this.setState(
      {
        id: decodedID,
      },
      this.populateSpellbook
    );
  };

  deleteSpellFromSpellbook = e => {
    userAPI
      .deleteSpell(this.state.id, this.state.spellToDisplay.name)
      .then(response => {
        console.log("Spell Removed!");
        this.populateSpellbook();
        this.setState({
          spellToDisplay: "",
        });
      })
      .catch(err => console.log(err));
  };

  populateSpellbook = () => {
    // console.log(this.state.id);
    userAPI
      .getSpells(this.state.id)
      .then(response => {
        // console.log(response);
        const alphabetizedSpells = response.data.spells.sort(function(a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
        console.log(alphabetizedSpells);
        let spellsByLevel = [];
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
        for (let k = 0; k < alphabetizedSpells.length; k++) {
          if (
            alphabetizedSpells[k].level === -1 ||
            alphabetizedSpells[k].level === 0
          ) {
            spellsByLevel.push(alphabetizedSpells[k]);
            level0.push(alphabetizedSpells[k]);
          }
        }
        for (let i = 1; i < 10; i++) {
          for (let j = 0; j < alphabetizedSpells.length; j++) {
            if (alphabetizedSpells[j].level === i) {
              spellsByLevel.push(alphabetizedSpells[j]);
              eval("level" + i).push(alphabetizedSpells[j]);
            }
          }
        }
        // console.log(spellsByLevel);
        // console.log(level0);
        // console.log(level2);
        // console.log(level3);
        let listOfLists = [];
        for (let l = 0; l < 10; l++) {
          let listFragment = eval("level" + l);
          listOfLists.push(listFragment);
        }
        console.log(listOfLists);
        this.setState({
          name: response.data.name,
          email: response.data.email,
          spells: spellsByLevel,
          listsByLevels: listOfLists,
        });
      })
      .catch(err => console.log(err));
  };

  alphabetizeObjArr = objArr => {
    objArr.sort(function(a, b) {
      return a.name > b.name;
    });
  };

  displaySpell = e => {
    console.log(e.target.dataset.name);
    for (let i = 0; i < this.state.spells.length; i++) {
      if (this.state.spells[i].name === e.target.dataset.name) {
        this.setState({
          spellToDisplay: this.state.spells[i],
        });
      }
    }
  };

  toLogout = e => {
    e.preventDefault();
    localStorage.clear(localStorage.spellbookJwt);
    this.setState(
      {
        id: "",
        name: "",
        email: "",
        spells: [],
        spellToDisplay: "",
      },
      (window.location.href = "/")
    );
  };

  toSearchPage = () => {
    window.location.href = "/";
  };

  // toggleLevelList = e => {
  //   const level = e.target.dataset.level;
  //   this.setState(prevState => ({
  //     [level]: !prevState.level,
  //   }));
  // };

  render() {
    return (
      <div className="page-spellbook-container">
        <div className="pages-spellbook-content">
          <LogoutBtn logout={this.toSearchPage} text={"Spell Search"} />
          <LogoutBtn logout={this.toLogout} text={"Log Out"} />
          <Spellbook>
            {this.state.listsByLevels.map((level, index) => {
              let listNumber = index;
              let spellLevel = index === 0 ? "Cantrip" : index;
              return level.length ? (
                <SbRow
                  level={spellLevel}
                  key={listNumber}
                  // data-level={"level" + listNumber}
                  // toggleList={this.toggleLevelList}
                >
                  {level.map((list, index) => {
                    return (
                      <li
                        className="page-spellbook-li"
                        key={index}
                        data-name={list.name}
                        onClick={this.displaySpell}
                      >
                        {list.name}
                      </li>
                    );
                  })}
                </SbRow>
              ) : null;
            })}
            {/* {this.state.spells.map((spell, index) => {
              let spellLevel =
                spell.level === -1 || spell.level === 0
                  ? (spell.level = "Cantrip")
                  : spell.level;
              return (
                <SpellItem
                  key={index}
                  name={spell.name}
                  school={spell.school}
                  level={spellLevel}
                  spellToDisplay={this.displaySpell}
                />
              );
            })} */}
          </Spellbook>
          {this.state.spellToDisplay ? (
            <Card
              page="spellbook"
              spell={this.state.spellToDisplay}
              class={"none"}
              loggedIn={this.state.id}
              removeSpell={this.deleteSpellFromSpellbook}
              // float={"right"}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SpellbookPage;
