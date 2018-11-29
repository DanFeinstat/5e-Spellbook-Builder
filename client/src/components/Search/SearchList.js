import React from "react";
import "./SearchList.css";

const SearchList = props => {
  const clericLevel0 = [
    "Guidance",
    "Light",
    "Mending",
    "Resistance",
    "Sacred Flame",
    "Spare the Dying",
    "Thaumaturgy",
  ];
  const clericLevel1 = [
    "Bane",
    "Bless",
    "Command",
    "Create or Destroy Water",
    "Cure Wounds",
    "Detect Evil and Good",
    "Detect Magic",
    "Detect Poison and Disease",
    "Guiding Bolt",
    "Healing Word",
    "Inflict Wounds",
    "Protection from Evil and Good",
    "Purify Food and Drink",
    "Sanctuary",
    "Shield of Faith",
  ];
  const clericLevel2 = [
    "Aid",
    "Augury",
    "Blindness/Deafness",
    "Calm Emotions",
    "Continual Flame",
    "Enhance Ability",
    "Find Traps",
    "Gentle Repose",
    "Hold Person",
    "Lesser Restoration",
    "Locate Object",
    "Prayer of Healing",
    "Protection from Poison",
    "Silence",
    "Spiritual Weapon",
    "Warding Bond",
    "Zone of Truth",
  ];

  const clericLevel3 = [
    "Animate Dead",
    "Beacon of Hope",
    "Bestow Curse",
    "Clairvoyance",
    "Create Food and Water",
    "Daylight",
    "Dispel Magic",
    "Glyph of Warding",
    "Magic Circle",
    "Mass Healing Word",
    "Meld into Stone",
    "Protection from Energy",
    "Remove Curse",
    "Revivify",
    "Sending",
    "Speak with Dead",
    "Spirit Guardians",
    "Tongues",
    "Water Walk",
  ];

  const clericLevel4 = [
    "Banishment",
    "Control Water",
    "Death Ward",
    "Divination",
    "Freedom of Movement",
    "Guardian of Faith",
    "Locate Creature",
    "Stone Shape",
  ];
  const clericLevel5 = [
    "Commune",
    "Contagion",
    "Dispel Evil and Good",
    "Flame Strike",
    "Geas",
    "Greater Restoration",
    "Hallow",
    "Insect Plague",
    "Legend Lore",
    "Mass Cure Wounds",
    "Planar Binding",
    "Raise Dead",
    "Scrying",
  ];

  const clericLevel6 = [
    "Blade Barrier",
    "Create Undead",
    "Find the Path",
    "Forbiddance",
    "Harm",
    "Heal",
    "Heroes' Feast",
    "Planar Ally",
    "True Seeing",
    "Word of Recall",
  ];

  const clericLevel7 = [
    "Conjure Celestial",
    "Divine Word",
    "Etherealness",
    "Fire Storm",
    "Plane Shift",
    "Regenerate",
    "Resurrection",
    "Symbol",
  ];

  const clericLevel8 = [
    "Antimagic Field",
    "Control Weather",
    "Earthquake",
    "Holy Aura",
  ];

  const clericLevel9 = [
    "Astral Projection",
    "Gate",
    "Mass Heal",
    "True Resurrection",
  ];
  const clericLists = [
    clericLevel0,
    clericLevel1,
    clericLevel2,
    clericLevel3,
    clericLevel4,
    clericLevel5,
    clericLevel6,
    clericLevel7,
    clericLevel8,
    clericLevel9,
  ];
  //   let classListToUse = eval(props.classSelected.toLowerCase() + "Lists");
  return (
    <div>
      {props.classSelected != null
        ? eval(props.classSelected.toLowerCase() + "Lists").map(
            (level, index) => {
              let listNumber = index;
              let spellLevel = index === 0 ? "Cantrip" : index;
              return level.length ? (
                <React.Fragment>
                  <h4>Spell Level: {spellLevel}</h4>
                  <ul key={listNumber}>
                    {level.map((list, index) => {
                      return (
                        <li
                          className="sL-li"
                          key={index}
                          data-name={list}
                          onClick={props.fetchSpell}
                        >
                          {list}
                        </li>
                      );
                    })}
                  </ul>
                </React.Fragment>
              ) : null;
            }
          )
        : null}
    </div>
  );
};

export default SearchList;
