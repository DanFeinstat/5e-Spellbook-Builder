import React from "react";
import "./TutorialCard.css";
import "./Card.css";
//card category icons
import RitualIcon from "../Icons/RitualIcon";
import DurationIcon from "../Icons/DurationIcon";
import VerbalIcon from "../Icons/VerbalIcon";
import SomaticIcon from "../Icons/SomaticIcon";
import MaterialIcon from "../Icons/MaterialIcon";
import concentrationIcon from "../../images/concentration.png";

const TutorialCard = props => {
  return (
    <React.Fragment>
      <div className="tCard-container">
        <div className="card-text-block text-center full card-font-1 card-title">
          Spell Name
        </div>
        <div className="card-text-block half">
          <span className="card-font-1">School of Magic</span>
        </div>
        <div className="card-text-block half">
          <span className="card-font-2">CASTING TIME</span>
        </div>
        <div className="card-text-block full">
          <div className="card-font-2 half">
            <DurationIcon /> = DURATION
          </div>
          <div className="half">
            <span className="card-font-2">SPELL RANGE</span>
          </div>
        </div>
        <div className="card-text-block full">
          <div className="twoThirds">
            <span className="card-font-2">COMPONENTS</span>: <VerbalIcon />=
            Verbal, <br />
            <SomaticIcon />= Somatic, <MaterialIcon />= Material
          </div>
          <div className="third">
            <span className="card-font-2">SPELL LEVEL</span>
          </div>
        </div>
        <div className="tCard-text-block full">
          Description of the spell goes here.
        </div>
        <div className="card-text-block full">
          <div className="half">
            <span>
              <img
                className="card-icon"
                src={concentrationIcon}
                alt="concentration"
              />
            </span>
            = Concentration
          </div>
          <div className="half">
            <span>
              <RitualIcon />
            </span>
            = Ritual
          </div>
        </div>
        <div className="card-text-block full">
          <span className="card-font-2">MATERIALS</span>: A more detailed
          description of the materials needed for the spell.
        </div>
        {/* <div className="card-text-block full">
          <span className="card-font-2">HIGHER LEVEL</span>: Description of
          effects when a higher level spell slot is used.
        </div> */}
      </div>
      <div className={"tCard-transcribe-btn"}>Transcribe</div>
    </React.Fragment>
  );
};

export default TutorialCard;
