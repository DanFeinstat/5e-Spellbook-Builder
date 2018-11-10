import React from "react";
import "./Card.css";
import RitualIcon from "../Icons/RitualIcon";
import AbjurationIcon from "../Icons/AbjurationIcon";
import ConjurationIcon from "../Icons/ConjurationIcon";
import DivinationIcon from "../Icons/DivinationIcon";
import EnchantmentIcon from "../Icons/EnchantmentIcon";
import EvocationIcon from "../Icons/EvocationIcon";
import IllusionIcon from "../Icons/IllusionIcon";
import NecromancyIcon from "../Icons/NecromancyIcon";
import TransmutationIcon from "../Icons/TransmutationIcon";
import concentrationIcon from "../../images/concentration.png";

const Card = props => {
  const components = props.spell.components.join(" ");
  const desc = props.spell.desc.join(" ");
  //   const higherLevel = props.spell.higherLevel.join(" ");
  return (
    <div className="card-container">
      <div className="card-text-block text-center full">{props.spell.name}</div>
      <div className="card-text-block half">
        {props.spell.school === "Abjuration" ? (
          <React.Fragment>
            <AbjurationIcon /> {props.spell.school}
          </React.Fragment>
        ) : props.spell.school === "Conjuration" ? (
          <React.Fragment>
            <ConjurationIcon /> {props.spell.school}
          </React.Fragment>
        ) : props.spell.school === "Divination" ? (
          <React.Fragment>
            <DivinationIcon /> {props.spell.school}
          </React.Fragment>
        ) : props.spell.school === "Enchantment" ? (
          <React.Fragment>
            <EnchantmentIcon /> {props.spell.school}
          </React.Fragment>
        ) : props.spell.school === "Evocation" ? (
          <React.Fragment>
            <EvocationIcon /> {props.spell.school}
          </React.Fragment>
        ) : props.spell.school === "Illusion" ? (
          <React.Fragment>
            <IllusionIcon /> {props.spell.school}
          </React.Fragment>
        ) : props.spell.school === "Necromancy" ? (
          <React.Fragment>
            <NecromancyIcon /> {props.spell.school}
          </React.Fragment>
        ) : props.spell.school === "Transmutation" ? (
          <React.Fragment>
            <TransmutationIcon /> {props.spell.school}
          </React.Fragment>
        ) : (
          "School: " + props.spell.school
        )}
      </div>
      <div className="card-text-block half">
        Casting Time: {props.spell.castingTime}
      </div>
      <div className="card-text-block full">
        <div className="half">Dur: {props.spell.duration}</div>
        <div className="half">Range: {props.spell.range}</div>
      </div>
      <div className="card-text-block full">
        <div className="half">Components: {components}</div>
        <div className="half">
          Level: {props.spell.level === -1 ? "Cantrip" : props.spell.level}
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
          {props.spell.concentration}
        </div>
        <div className="half">
          <span>
            <RitualIcon />
          </span>
          {": "}
          {props.spell.ritual}
        </div>
      </div>
      <div className="card-text-block full">
        Materials:{" "}
        {props.spell.materials !== undefined
          ? props.spell.materials
          : "No materials required."}
      </div>
      {props.spell.level !== -1 ? (
        <div className="card-text-block full">
          Higher Level:{" "}
          {props.spell.higherLevel !== undefined
            ? props.spell.higherLevel.join(" ")
            : "This spell does not scale."}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
