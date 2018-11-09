import React from "react";
import "./Card.css";

const Card = props => {
  const components = props.spell.components.join(" ");
  const desc = props.spell.desc.join(" ");
  const higherLevel = props.spell.higherLevel.join(" ");
  return (
    <div className="cardContainer">
      <div className="full">{props.spell.name}</div>
      <div className="full">{props.spell.school}</div>
      <div className="full">{props.spell.castingTime}</div>
      <div className="full">{components}</div>
      <div className="full">
        <div className="half">{props.spell.duration}</div>
        <div className="half">{props.spell.range}</div>
      </div>
      <div className="full">{desc}</div>
      <div className="full">
        <div className="half">{props.spell.concentration}</div>
        <div className="half">{props.spell.ritual}</div>
      </div>
      <div className="full">{props.spell.materials}</div>
      <div className="full">{higherLevel}</div>
    </div>
  );
};

export default Card;
