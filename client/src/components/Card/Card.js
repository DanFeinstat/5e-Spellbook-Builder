import React, { Component } from "react";
import "./Card.css";
//school icons
import RitualIcon from "../Icons/RitualIcon";
import AbjurationIcon from "../Icons/AbjurationIcon";
import ConjurationIcon from "../Icons/ConjurationIcon";
import DivinationIcon from "../Icons/DivinationIcon";
import EnchantmentIcon from "../Icons/EnchantmentIcon";
import EvocationIcon from "../Icons/EvocationIcon";
import IllusionIcon from "../Icons/IllusionIcon";
import NecromancyIcon from "../Icons/NecromancyIcon";
import TransmutationIcon from "../Icons/TransmutationIcon";
//card category icons
import DurationIcon from "../Icons/DurationIcon";
import VerbalIcon from "../Icons/VerbalIcon";
import SomaticIcon from "../Icons/SomaticIcon";
import MaterialIcon from "../Icons/MaterialIcon";
import concentrationIcon from "../../images/concentration.png";

class Card extends Component {
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
  render() {
    // const components = this.props.spell.components.join(" ");
    const components = this.convertComponentsToIcons(
      this.props.spell.components
    );
    // console.log(testComp);
    const desc = this.props.spell.desc.join(" ");
    //   const higherLevel = this.props.spell.higherLevel.join(" ");
    return (
      <div className="card-container">
        <div className="card-text-block text-center full">
          {this.props.spell.name}
        </div>
        <div className="card-text-block half">
          {this.props.spell.school === "Abjuration" ? (
            <React.Fragment>
              <AbjurationIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : this.props.spell.school === "Conjuration" ? (
            <React.Fragment>
              <ConjurationIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : this.props.spell.school === "Divination" ? (
            <React.Fragment>
              <DivinationIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : this.props.spell.school === "Enchantment" ? (
            <React.Fragment>
              <EnchantmentIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : this.props.spell.school === "Evocation" ? (
            <React.Fragment>
              <EvocationIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : this.props.spell.school === "Illusion" ? (
            <React.Fragment>
              <IllusionIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : this.props.spell.school === "Necromancy" ? (
            <React.Fragment>
              <NecromancyIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : this.props.spell.school === "Transmutation" ? (
            <React.Fragment>
              <TransmutationIcon /> {this.props.spell.school}
            </React.Fragment>
          ) : (
            "School: " + this.props.spell.school
          )}
        </div>
        <div className="card-text-block half">
          Casting Time: {this.props.spell.castingTime}
        </div>
        <div className="card-text-block full">
          <div className="half">
            <DurationIcon />: {this.props.spell.duration}
          </div>
          <div className="half">Range: {this.props.spell.range}</div>
        </div>
        <div className="card-text-block full">
          <div className="twoThirds">
            Components:{" "}
            {components.map((data, index) => {
              return <React.Fragment key={index}>{data}</React.Fragment>;
            })}
          </div>
          <div className="third">
            Level:{" "}
            {this.props.spell.level === -1 ? "Cantrip" : this.props.spell.level}
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
          Materials:{" "}
          {this.props.spell.materials !== undefined
            ? this.props.spell.materials
            : "No materials required."}
        </div>
        {this.props.spell.level !== -1 ? (
          <div className="card-text-block full">
            Higher Level:{" "}
            {this.props.spell.higherLevel !== undefined
              ? this.props.spell.higherLevel.join(" ")
              : "This spell does not scale."}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
