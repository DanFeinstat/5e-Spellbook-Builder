import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Card.css";
//API
import userAPI from "../../utils/userAPI";
//school icons
import AbjurationIcon from "../Icons/AbjurationIcon";
import ConjurationIcon from "../Icons/ConjurationIcon";
import DivinationIcon from "../Icons/DivinationIcon";
import EnchantmentIcon from "../Icons/EnchantmentIcon";
import EvocationIcon from "../Icons/EvocationIcon";
import IllusionIcon from "../Icons/IllusionIcon";
import NecromancyIcon from "../Icons/NecromancyIcon";
import TransmutationIcon from "../Icons/TransmutationIcon";
//card category icons
import RitualIcon from "../Icons/RitualIcon";
import DurationIcon from "../Icons/DurationIcon";
import VerbalIcon from "../Icons/VerbalIcon";
import SomaticIcon from "../Icons/SomaticIcon";
import MaterialIcon from "../Icons/MaterialIcon";
import concentrationIcon from "../../images/concentration.png";

class Card extends Component {
  componentDidMount() {
    if (this.props.scrollActive) {
      this.scrollToCard();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.spell !== prevProps.spell && this.props.scrollActive) {
      this.scrollToCard();
    }
  }
  saveSpellToSpellbook = e => {
    e.preventDefault();
    userAPI
      .getSpells(this.props.loggedIn)
      .then(response => {
        let isDuplicate = res => {
          for (let i = 0; i < res.data.spellbooks[0].spells.length; i++) {
            if (
              res.data.spellbooks[0].spells[i].name === this.props.spell.name
            ) {
              return true;
            }
          }
        };
        let duplicate = isDuplicate(response);
        if (!duplicate) {
          userAPI
            .addSpell(
              this.props.loggedIn,
              this.props.username,
              this.props.spell
            )
            .then(response => alert("Spell added!"))
            .catch(err => console.log(err));
        } else {
          alert("This spell is already in your spellbook.");
        }
      })
      .catch(err => console.log(err));
  };

  convertComponentsToIcons = comps => {
    let compsArr = [];
    for (let i = 0; i < comps.length; i++) {
      if (comps[i] === "V") {
        compsArr.push(<VerbalIcon />);
      } else if (comps[i] === "S") {
        compsArr.push(<SomaticIcon />);
      } else if (comps[i] === "M") {
        compsArr.push(<MaterialIcon />);
      }
    }
    return compsArr;
  };

  scrollToCard = () => {
    let cardDiv = ReactDOM.findDOMNode(document.getElementById("scrollRefOne"));
    cardDiv.scrollIntoView({ behavior: "smooth", block: "start" }, true);
  };
  render() {
    const components = this.convertComponentsToIcons(
      this.props.spell.components
    );
    const desc = this.props.spell.desc;
    return (
      <React.Fragment>
        <div
          className={"card-container card-float-" + this.props.float}
          id="scrollRefOne"
        >
          <div className="card-text-block text-center full card-font-1 card-title">
            {this.props.spell.name}
          </div>
          <div className="card-text-block half">
            {this.props.spell.school === "Abjuration" ? (
              <React.Fragment>
                <AbjurationIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Conjuration" ? (
              <React.Fragment>
                <ConjurationIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Divination" ? (
              <React.Fragment>
                <DivinationIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Enchantment" ? (
              <React.Fragment>
                <EnchantmentIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Evocation" ? (
              <React.Fragment>
                <EvocationIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Illusion" ? (
              <React.Fragment>
                <IllusionIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Necromancy" ? (
              <React.Fragment>
                <NecromancyIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Transmutation" ? (
              <React.Fragment>
                <TransmutationIcon />{" "}
                <span className="card-font-1">{this.props.spell.school}</span>
              </React.Fragment>
            ) : (
              "School: " + this.props.spell.school
            )}
          </div>
          <div className="card-text-block half">
            <span className="card-font-2">CASTING TIME</span>:{" "}
            {this.props.spell.castingTime}
          </div>
          <div className="card-text-block full">
            <div className="half">
              <DurationIcon />: {this.props.spell.duration}
            </div>
            <div className="half">
              <span className="card-font-2">RANGE</span>:{" "}
              {this.props.spell.range}
            </div>
          </div>
          <div className="card-text-block full">
            <div className="twoThirds">
              <span className="card-font-2">COMPONENTS</span>:{" "}
              {components.map((data, index) => {
                return <React.Fragment key={index}>{data}</React.Fragment>;
              })}
            </div>
            <div className="third">
              <span className="card-font-2">LEVEL</span>:{" "}
              {this.props.spell.level === -1 || this.props.spell.level === 0
                ? "Cantrip"
                : this.props.spell.level}
            </div>
          </div>
          <div className="card-text-block full">{desc}</div>
          <div className="card-text-block full">
            <div className="half">
              <span>
                <img
                  className="card-icon"
                  src={concentrationIcon}
                  alt="concentration"
                />
              </span>
              {": "}
              {this.props.spell.concentration}
            </div>
            <div className="half">
              <span>
                <RitualIcon />
              </span>
              {": "}
              {this.props.spell.ritual}
            </div>
          </div>
          <div className="card-text-block full">
            <span className="card-font-2">MATERIALS</span>:{" "}
            {this.props.spell.materials !== undefined
              ? this.props.spell.materials
              : "No materials required."}
          </div>
        </div>
        {this.props.loggedIn ? (
          <div
            onClick={
              this.props.page === "landing"
                ? this.saveSpellToSpellbook
                : this.props.removeSpell
            }
            className={
              this.props.page === "landing"
                ? "card-transcribe-btn bg-" + this.props.class
                : "card-transcribe-btn spellbook-adjust bg-" + this.props.class
            }
          >
            {this.props.page === "landing" ? "Transcribe" : "Delete"}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Card;
