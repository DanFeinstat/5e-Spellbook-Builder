import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Card.module.css";
import styles2 from "./TutorialCard.module.css";
//card category icons
import RitualIcon from "../Icons/RitualIcon";
import DurationIcon from "../Icons/DurationIcon";
import VerbalIcon from "../Icons/VerbalIcon";
import SomaticIcon from "../Icons/SomaticIcon";
import MaterialIcon from "../Icons/MaterialIcon";
import concentrationIcon from "../../images/concentration.png";

const TutorialCard = () => {
  return (
    <React.Fragment>
      <div className={styles2.container}>
        <div
          className={`${styles.textBlock} ${styles.full} ${styles.font1} ${
            styles.title
          }`}
        >
          Spell Name
        </div>
        <div className={`${styles.textBlock} ${styles.half}`}>
          <span className={styles.font1}>School of Magic</span>
        </div>
        <div className={`${styles.textBlock} ${styles.half}`}>
          <span className={styles.font2}>CASTING TIME</span>
        </div>
        <div className={`${styles.textBlock} ${styles.full}`}>
          <div className={`${styles.font2} ${styles.half}`}>
            <DurationIcon /> = DURATION
          </div>
          <div className={styles.half}>
            <span className={styles.font2}>SPELL RANGE</span>
          </div>
        </div>
        <div className={`${styles.textBlock} ${styles.full}`}>
          <div className={styles.twoThirds}>
            <span className={styles.font2}>COMPONENTS</span>: <VerbalIcon />=
            Verbal, <br />
            <SomaticIcon />= Somatic, <MaterialIcon />= Material
          </div>
          <div className={styles.third}>
            <span className={styles.font2}>SPELL LEVEL</span>
          </div>
        </div>
        <div className={`${styles2.textBlock} ${styles.full}`}>
          Description of the spell goes here.
        </div>
        <div className={`${styles.textBlock} ${styles.full}`}>
          <div className={styles.half}>
            <span>
              <img
                className={styles.icon}
                src={concentrationIcon}
                alt="concentration"
              />
            </span>
            = Concentration
          </div>
          <div className={styles.half}>
            <span>
              <RitualIcon />
            </span>
            = Ritual
          </div>
        </div>
        <div className={`${styles.textBlock} ${styles.full}`}>
          <span className={styles.font2}>MATERIALS</span>: A more detailed
          description of the materials needed for the spell.
        </div>
        {/* <div className={`${styles.textBlock} ${styles.full}`}>
          <span className={styles.font2}>HIGHER LEVEL</span>: Description of
          effects when a higher level spell slot is used.
        </div> */}
      </div>
      <div className={styles2.transcribeBtn}>Transcribe</div>
    </React.Fragment>
  );
};

export default TutorialCard;
