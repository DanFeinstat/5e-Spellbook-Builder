import React from "react";
import "./Card.css";

const Card = props => {
  const components = props.spell.components.join(" ");
  const desc = props.spell.desc.join(" ");
  //   const higherLevel = props.spell.higherLevel.join(" ");
  return (
    <div className="card-container">
      <div className="card-text-block text-center full">{props.spell.name}</div>
      <div className="card-text-block half">School: {props.spell.school}</div>
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
        <div className="half">{props.spell.concentration}</div>
        <div className="half">{props.spell.ritual}</div>
      </div>
      <div className="card-text-block full">
        Materials:{" "}
        {props.spell.materials
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
