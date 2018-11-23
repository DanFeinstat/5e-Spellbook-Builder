import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import SpellItem from "../components/Spellbook/SpellItem";
import Spellbook from "../components/Spellbook/Spellbook";
import Card from "../components/Card/Card";
import "./Pages.css";
import LogoutBtn from "../components/Spellbook/LogoutBtn";
const jwt = require("jsonwebtoken");

class SpellbookPage extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    spells: [],
    spellToDisplay: "",
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

  populateSpellbook = () => {
    console.log(this.state.id);
    userAPI
      .getSpells(this.state.id)
      .then(response => {
        console.log(response);
        this.setState({
          name: response.data.name,
          email: response.data.email,
          spells: response.data.spells,
        });
      })
      .catch(err => console.log(err));
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

  render() {
    return (
      <div className="page-spellbook-container">
        <div className="pages-spellbook-content">
          <LogoutBtn logout={this.toLogout} />
          <Spellbook>
            {this.state.spells.map((spell, index) => {
              return (
                <SpellItem
                  key={index}
                  name={spell.name}
                  school={spell.school}
                  level={spell.level}
                  spellToDisplay={this.displaySpell}
                />
              );
            })}
          </Spellbook>
          {this.state.spellToDisplay ? (
            <Card
              spell={this.state.spellToDisplay}
              class={"none"}
              loggedIn={false}
              // float={"right"}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SpellbookPage;
