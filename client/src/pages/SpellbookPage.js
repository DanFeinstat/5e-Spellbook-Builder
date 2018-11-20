import React, { Component } from "react";
import userAPI from "../utils/userAPI";
const jwt = require("jsonwebtoken");

class SpellbookPage extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    spells: [],
  };

  componentDidMount() {
    console.log("loaded");
    this.decodeUserID();
  }

  componentDidUpdate() {
    this.populateSpellbook();
  }

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

  populateSpellbook = () => {
    userAPI
      .getSpells(this.state.id)
      .then(response =>
        // this.setState({
        //   name: response.data[0].name,
        //   email: response.data[0].email,
        //   spells: response.data[0].spells,
        // })
        console.log(response)
      )
      .catch(err => console.log(err));
  };

  render() {
    return <div />;
  }
}

export default SpellbookPage;
