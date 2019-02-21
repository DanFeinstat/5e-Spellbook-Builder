import React, { Component } from "react";
import ReactDOM from "react-dom";
import CardContainer from "./CardContainer";
import styles from "./Card.module.css";
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
  spellbookForIn = (name, array) => {
    for (let i = 0; i < array.length; i++) {
      let obj = array[i];
      for (const property in obj) {
        if (obj[property] === name) {
          return i;
        }
      }
    }
  };
  saveSpellToSpellbook = e => {
    e.preventDefault();
    userAPI
      .getSpells(this.props.loggedIn)
      .then(response => {
        let spellbookIndex = this.spellbookForIn(
          this.props.username,
          response.data.spellbooks
        );
        let isDuplicate = res => {
          for (
            let i = 0;
            i < res.data.spellbooks[spellbookIndex].spells.length;
            i++
          ) {
            if (
              res.data.spellbooks[spellbookIndex].spells[i].name ===
              this.props.spell.name
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
      // <CardContainer>
      <div>
        <div className={styles.container} id="scrollRefOne">
          <div
            className={`${styles.textBlock} ${styles.full} ${styles.font1} ${
              styles.title
            }`}
          >
            {this.props.spell.name}
          </div>
          <div className={`${styles.textBlock} ${styles.half}`}>
            {this.props.spell.school === "Abjuration" ? (
              <React.Fragment>
                <AbjurationIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Conjuration" ? (
              <React.Fragment>
                <ConjurationIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Divination" ? (
              <React.Fragment>
                <DivinationIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Enchantment" ? (
              <React.Fragment>
                <EnchantmentIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Evocation" ? (
              <React.Fragment>
                <EvocationIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Illusion" ? (
              <React.Fragment>
                <IllusionIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Necromancy" ? (
              <React.Fragment>
                <NecromancyIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : this.props.spell.school === "Transmutation" ? (
              <React.Fragment>
                <TransmutationIcon />{" "}
                <span className={styles.font1}>{this.props.spell.school}</span>
              </React.Fragment>
            ) : (
              "School: " + this.props.spell.school
            )}
          </div>
          <div className={`${styles.textBlock} ${styles.half}`}>
            <span className={styles.font2}>CASTING TIME</span>:{" "}
            {this.props.spell.castingTime}
          </div>
          <div className={`${styles.textBlock} ${styles.full}`}>
            <div className={styles.half}>
              <DurationIcon />: {this.props.spell.duration}
            </div>
            <div className={styles.half}>
              <span className={styles.font2}>RANGE</span>:{" "}
              {this.props.spell.range}
            </div>
          </div>
          <div className={`${styles.textBlock} ${styles.full}`}>
            <div className={styles.twoThirds}>
              <span className={styles.font2}>COMPONENTS</span>:{" "}
              {components.map((data, index) => {
                return <React.Fragment key={index}>{data}</React.Fragment>;
              })}
            </div>
            <div className={styles.third}>
              <span className={styles.font2}>LEVEL</span>:{" "}
              {this.props.spell.level === -1 || this.props.spell.level === 0
                ? "Cantrip"
                : this.props.spell.level}
            </div>
          </div>
          <div className={`${styles.textBlock} ${styles.full}`}>{desc}</div>
          <div className={`${styles.textBlock} ${styles.full}`}>
            <div className={styles.half}>
              <span>
                <img
                  className={styles.icon}
                  src={concentrationIcon}
                  alt="concentration"
                />
              </span>
              {": "}
              {this.props.spell.concentration}
            </div>
            <div className={styles.half}>
              <span>
                <RitualIcon />
              </span>
              {": "}
              {this.props.spell.ritual}
            </div>
          </div>
          <div className={`${styles.textBlock} ${styles.full}`}>
            <span className={styles.font2}>MATERIALS</span>:{" "}
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
                ? `${styles.transcribeBtn} bg-${this.props.class}`
                : `${styles.transcribeBtn} 
                ${styles.spellbookAdjust} 
                bg-${this.props.class}`
            }
          >
            {this.props.page === "landing" ? "Transcribe" : "Delete"}
          </div>
        ) : null}
        {/* </CardContainer> */}
      </div>
    );
  }
}

export default Card;
