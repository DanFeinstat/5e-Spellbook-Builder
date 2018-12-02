import React from "react";
import "./SearchList.css";

const SearchList = props => {
  const bardLevel0 = [
    "Dancing Lights",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor Illusion",
    "Prestidigitation",
    "True Strike",
    "Vicious Mockery",
  ];
  const bardLevel1 = [
    "Animal Friendship",
    "Bane",
    "Charm Person",
    "Comprehend Languages",
    "Cure Wounds",
    "Detect Magic",
    "Disguise Self",
    "Faerie Fire",
    "Feather Fall",
    "Healing Word",
    "Heroism",
    "Hideous Laughter",
    "Identify",
    "Illusory Script",
    "Longstrider",
    "Silent Image",
    "Sleep",
    "Speak with Animals",
    "Thunderwave",
    "Unseen Servant",
  ];
  const bardLevel2 = [
    "Animal Messenger",
    "Blindness/Deafness",
    "Calm Emotions",
    "Detect Thoughts",
    "Enhance Ability",
    "Enthrall",
    "Heat Metal",
    "Hold Person",
    "Invisibility",
    "Knock",
    "Lesser Restoration",
    "Locate Animals or Plants",
    "Locate Object",
    "Magic Mouth",
    "See Invisibility",
    "Shatter",
    "Silence",
    "Suggestion",
    "Zone of Truth",
  ];
  const bardLevel3 = [
    "Bestow Curse",
    "Clairvoyance",
    "Dispel Magic",
    "Fear",
    "Glyph of Warding",
    "Hypnotic Pattern",
    "Major Image",
    "Nondetection",
    "Plant Growth",
    "Sending",
    "Speak with Dead",
    "Speak with Plants",
    "Stinking Cloud",
    "Tiny Hut",
    "Tongues",
  ];
  const bardLevel4 = [
    "Compulsion",
    "Confusion",
    "Dimension Door",
    "Freedom of Movement",
    "Greater Invisibility",
    "Hallucinatory Terrain",
    "Locate Creature",
    "Polymorph",
  ];
  const bardLevel5 = [
    "Animate Objects",
    "Awaken",
    "Dominate Person",
    "Dream",
    "Geas",
    "Greater Restoration",
    "Hold Monster",
    "Legend Lore",
    "Mass Cure Wounds",
    "Mislead",
    "Modify Memory",
    "Planar Binding",
    "Raise Dead",
    "Scrying",
    "Seeming",
    "Teleportation Circle",
  ];
  const bardLevel6 = [
    "Eyebite",
    "Find the Path",
    "Guards and Wards",
    "Irresistible Dance",
    "Mass Suggestion",
    "Programmed Illusion",
    "True Seeing",
  ];
  const bardLevel7 = [
    "Arcane Sword",
    "Etherealness",
    "Forcecage",
    "Magnificent Mansion",
    "Mirage Arcane",
    "Project Image",
    "Regenerate",
    "Resurrection",
    "Symbol",
    "Teleport",
  ];
  const bardLevel8 = [
    "Dominate Monster",
    "Feeblemind",
    "Glibness",
    "Mind Blank",
    "Power Word Stun",
  ];
  const bardLevel9 = ["Foresight", "Power Word Kill", "True Polymorph"];
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

  const druidLevel0 = [
    "Druidcraft",
    "Guidance",
    "Mending",
    "Poison Spray",
    "Produce Flame",
    "Resistance",
    "Shillelagh",
  ];
  const druidLevel1 = [
    "Animal Friendship",
    "Charm Person",
    "Create or Destroy Water",
    "Cure Wounds",
    "Detect Magic",
    "Detect Poison and Disease",
    "Entangle",
    "Faerie Fire",
    "Fog Cloud",
    "Goodberry",
    "Healing Word",
    "Jump",
    "Longstrider",
    "Purify Food and Drink",
    "Speak with Animals",
    "Thunderwave",
  ];
  const druidLevel2 = [
    "Animal Messenger",
    "Barkskin",
    "Darkvision",
    "Enhance Ability",
    "Find Traps",
    "Flame Blade",
    "Flaming Sphere",
    "Gust of Wind",
    "Heat Metal",
    "Hold Person",
    "Lesser Restoration",
    "Locate Animals or Plants",
    "Locate Object",
    "Moonbeam",
    "Pass without Trace",
    "Protection from Poison",
    "Spike Growth",
  ];
  const druidLevel3 = [
    "Call Lightning",
    "Conjure Animals",
    "Daylight",
    "Dispel Magic",
    "Meld into Stone",
    "Plant Growth",
    "Protection from Energy",
    "Sleet Storm",
    "Speak with Plants",
    "Water Breathing",
    "Water Walk",
    "Wind Wall",
  ];
  const druidLevel4 = [
    "Blight",
    "Confusion",
    "Conjure Minor Elementals",
    "Conjure Woodland Beings",
    "Control Water",
    "Dominate Beast",
    "Freedom of Movement",
    "Giant Insect",
    "Hallucinatory Terrain",
    "Ice Storm",
    "Locate Creature",
    "Polymorph",
    "Stone Shape",
    "Stoneskin",
    "Wall of Fire",
  ];
  const druidLevel5 = [
    "Antilife Shell",
    "Awaken",
    "Commune with Nature",
    "Conjure Elemental",
    "Contagion",
    "Geas",
    "Greater Restoration",
    "Insect Plague",
    "Mass Cure Wounds",
    "Planar Binding",
    "Reincarnate",
    "Scrying",
    "Tree Stride",
    "Wall of Stone",
  ];
  const druidLevel6 = [
    "Conjure Fey",
    "Find the Path",
    "Heal",
    "Heroes' Feast",
    "Move Earth",
    "Sunbeam",
    "Transport via Plants",
    "Wall of Thorns",
    "Wind Walk",
  ];
  const druidLevel7 = [
    "Fire Storm",
    "Mirage Arcane",
    "Plane Shift",
    "Regenerate",
    "Reverse Gravity",
  ];
  const druidLevel8 = [
    "Animal Shapes",
    "Antipathy/Sympathy",
    "Control Weather",
    "Earthquake",
    "Feeblemind",
    "Sunburst",
  ];
  const druidLevel9 = [
    "Foresight",
    "Shapechange",
    "Storm of Vengeance",
    "True Resurrection",
  ];

  const paladinLevel1 = [
    "Bless",
    "Command",
    "Cure Wounds",
    "Detect Evil and Good",
    "Detect Magic",
    "Detect Poison and Disease",
    "Divine Favor",
    "Heroism",
    "Protection from Evil and Good",
    "Purify Food and Drink",
    "Shield of Faith",
  ];
  const paladinLevel2 = [
    "Aid",
    "Branding Smite",
    "Find Steed",
    "Lesser Restoration",
    "Locate Object",
    "Magic Weapon",
    "Protection from Poison",
    "Zone of Truth",
  ];
  const paladinLevel3 = [
    "Create Food and Water",
    "Daylight",
    "Dispel Magic",
    "Magic Circle",
    "Remove Curse",
    "Revivify",
  ];
  const paladinLevel4 = ["Banishment", "Death Ward", "Locate Creature"];
  const paladinLevel5 = ["Dispel Evil and Good", "Geas", "Raise Dead"];

  const rangerLevel1 = [
    "Alarm",
    "Animal Friendship",
    "Cure Wounds",
    "Detect Magic",
    "Detect Poison and Disease",
    "Fog Cloud",
    "Goodberry",
    "Hunter's Mark",
    "Jump",
    "Longstrider",
    "Speak with Animals",
  ];
  const rangerLevel2 = [
    "Animal Messenger",
    "Barkskin",
    "Darkvision",
    "Find Traps",
    "Lesser Restoration",
    "Locate Animals or Plants",
    "Locate Object",
    "Pass without Trace",
    "Protection from Poison",
    "Silence",
    "Spike Growth",
  ];
  const rangerLevel3 = [
    "Conjure Animals",
    "Daylight",
    "Nondetection",
    "Plant Growth",
    "Protection from Energy",
    "Speak with Plants",
    "Water Breathing",
    "Water Walk",
    "Wind Wall",
  ];
  const rangerLevel4 = [
    "Conjure Woodland Beings",
    "Freedom of Movement",
    "Locate Creature",
    "Stoneskin",
  ];
  const rangerLevel5 = ["Commune with Nature", "Tree Stride"];

  const sorcererLevel0 = [
    "Acid Splash",
    "Chill Touch",
    "Dancing Lights",
    "Fire Bolt",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor Illusion",
    "Poison Spray",
    "Prestidigitation",
    "Ray of Frost",
    "Shocking Grasp",
    "True Strike",
  ];
  const sorcererLevel1 = [
    "Burning Hands",
    "Charm Person",
    "Color Spray",
    "Comprehend Languages",
    "Detect Magic",
    "Disguise Self",
    "Expeditious Retreat",
    "False Life",
    "Feather Fall",
    "Fog Cloud",
    "Jump",
    "Mage Armor",
    "Magic Missile",
    "Shield",
    "Silent Image",
    "Sleep",
    "Thunderwave",
  ];
  const sorcererLevel2 = [
    "Alter Self",
    "Blindness/Deafness",
    "Blur",
    "Darkness",
    "Darkvision",
    "Detect Thoughts",
    "Enhance Ability",
    "Enlarge/Reduce",
    "Gust of Wind",
    "Hold Person",
    "Invisibility",
    "Knock",
    "Levitate",
    "Mirror Image",
    "Misty Step",
    "Scorching Ray",
    "See Invisibility",
    "Shatter",
    "Spider Climb",
    "Suggestion",
    "Web",
  ];
  const sorcererLevel3 = [
    "Blink",
    "Clairvoyance",
    "Counterspell",
    "Daylight",
    "Dispel Magic",
    "Fear",
    "Fireball",
    "Fly",
    "Gaseous Form",
    "Haste",
    "Hypnotic Pattern",
    "Lightning Bolt",
    "Major Image",
    "Protection from Energy",
    "Sleet Storm",
    "Slow",
    "Stinking Cloud",
    "Tongues",
    "Water Breathing",
    "Water Walk",
  ];
  const sorcererLevel4 = [
    "Banishment",
    "Blight",
    "Confusion",
    "Dimension Door",
    "Dominate Beast",
    "Greater Invisibility",
    "Ice Storm",
    "Polymorph",
    "Stoneskin",
    "Wall of Fire",
  ];
  const sorcererLevel5 = [
    "Animate Objects",
    "Cloudkill",
    "Cone of Cold",
    "Creation",
    "Dominate Person",
    "Hold Monster",
    "Insect Plague",
    "Seeming",
    "Telekinesis",
    "Teleportation Circle",
    "Wall of Stone",
  ];
  const sorcererLevel6 = [
    "Chain Lightning",
    "Circle of Death",
    "Disintegrate",
    "Eyebite",
    "Globe of Invulnerability",
    "Mass Suggestion",
    "Move Earth",
    "Sunbeam",
    "True Seeing",
  ];
  const sorcererLevel7 = [
    "Delayed Blast Fireball",
    "Etherealness",
    "Finger of Death",
    "Fire Storm",
    "Plane Shift",
    "Prismatic Spray",
    "Reverse Gravity",
    "Teleport",
  ];
  const sorcererLevel8 = [
    "Dominate Monster",
    "Earthquake",
    "Incendiary Cloud",
    "Power Word Stun",
    "Sunburst",
  ];
  const sorcererLevel9 = [
    "Gate",
    "Meteor Swarm",
    "Power Word Kill",
    "Time Stop",
    "Wish",
  ];

  const warlockLevel0 = [
    "Chill Touch",
    "Eldritch Blast",
    "Mage Hand",
    "Minor Illusion",
    "Poison Spray",
    "Prestidigitation",
    "True Strike",
  ];
  const warlockLevel1 = [
    "Charm Person",
    "Comprehend Languages",
    "Expeditious Retreat",
    "Hellish Rebuke",
    "Illusory Script",
    "Protection from Evil and Good",
    "Unseen Servant",
  ];
  const warlockLevel2 = [
    "Darkness",
    "Enthrall",
    "Hold Person",
    "Invisibility",
    "Mirror Image",
    "Misty Step",
    "Ray of Enfeeblement",
    "Shatter",
    "Spider Climb",
    "Suggestion",
  ];
  const warlockLevel3 = [
    "Counterspell",
    "Dispel Magic",
    "Fear",
    "Fly",
    "Gaseous Form",
    "Hypnotic Pattern",
    "Magic Circle",
    "Major Image",
    "Remove Curse",
    "Tongues",
    "Vampiric Touch",
  ];
  const warlockLevel4 = [
    "Banishment",
    "Blight",
    "Dimension Door",
    "Hallucinatory Terrain",
  ];
  const warlockLevel5 = [
    "Contact Other Plane",
    "Dream",
    "Hold Monster",
    "Scrying",
  ];
  const warlockLevel6 = [
    "Circle of Death",
    "Conjure Fey",
    "Create Undead",
    "Eyebite",
    "Flesh to Stone",
    "Mass Suggestion",
    "True Seeing",
  ];
  const warlockLevel7 = [
    "Etherealness",
    "Finger of Death",
    "Forcecage",
    "Plane Shift",
  ];
  const warlockLevel8 = [
    "Demiplane",
    "Dominate Monster",
    "Feeblemind",
    "Glibness",
    "Power Word Stun",
  ];
  const warlockLevel9 = [
    "Astral Projection",
    "Foresight",
    "Imprisonment",
    "Power Word Kill",
    "True Polymorph",
  ];

  const wizardLevel0 = [
    "Acid Splash",
    "Chill Touch",
    "Dancing Lights",
    "Fire Bolt",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor Illusion",
    "Poison Spray",
    "Prestidigitation",
    "Ray of Frost",
    "Shocking Grasp",
    "True Strike",
  ];
  const wizardLevel1 = [
    "Alarm",
    "Burning Hands",
    "Charm Person",
    "Color Spray",
    "Comprehend Languages",
    "Detect Magic",
    "Disguise Self",
    "Expeditious Retreat",
    "False Life",
    "Feather Fall",
    "Find Familiar",
    "Floating Disk",
    "Fog Cloud",
    "Grease",
    "Hideous Laughter",
    "Identify",
    "Illusory Script",
    "Jump",
    "Longstrider",
    "Mage Armor",
    "Magic Missile",
    "Protection from Evil and Good",
    "Shield",
    "Silent Image",
    "Sleep",
    "Thunderwave",
    "Unseen Servant",
  ];
  const wizardLevel2 = [
    "Acid Arrow",
    "Alter Self",
    "Arcane Lock",
    "Arcanist's Magic Aura",
    "Blindness/Deafness",
    "Blur",
    "Continual Flame",
    "Darkness",
    "Darkvision",
    "Detect Thoughts",
    "Enlarge/Reduce",
    "Flaming Sphere",
    "Gentle Repose",
    "Gust of Wind",
    "Hold Person",
    "Invisibility",
    "Knock",
    "Levitate",
    "Locate Object",
    "Magic Mouth",
    "Magic Weapon",
    "Mirror Image",
    "Misty Step",
    "Ray of Enfeeblement",
    "Rope Trick",
    "Scorching Ray",
    "See Invisibility",
    "Shatter",
    "Spider Climb",
    "Suggestion",
    "Web",
  ];
  const wizardLevel3 = [
    "Animate Dead",
    "Bestow Curse",
    "Blink",
    "Clairvoyance",
    "Counterspell",
    "Dispel Magic",
    "Fear",
    "Fireball",
    "Fly",
    "Gaseous Form",
    "Glyph of Warding",
    "Haste",
    "Hypnotic Pattern",
    "Lightning Bolt",
    "Magic Circle",
    "Major Image",
    "Nondetection",
    "Phantom Steed",
    "Protection from Energy",
    "Remove Curse",
    "Sending",
    "Sleet Storm",
    "Slow",
    "Stinking Cloud",
    "Tiny Hut",
    "Tongues",
    "Vampiric Touch",
    "Water Breathing",
  ];
  const wizardLevel4 = [
    "Arcane Eye",
    "Banishment",
    "Black Tentacles",
    "Blight",
    "Confusion",
    "Conjure Minor Elementals",
    "Control Water",
    "Dimension Door",
    "Fabricate",
    "Faithful Hound",
    "Fire Shield",
    "Greater Invisibility",
    "Hallucinatory Terrain",
    "Ice Storm",
    "Locate Creature",
    "Phantasmal Killer",
    "Polymorph",
    "Private Sanctum",
    "Resilient Sphere",
    "Secret Chest",
    "Stone Shape",
    "Stoneskin",
    "Wall of Fire",
  ];
  const wizardLevel5 = [
    "Animate Objects",
    "Arcane Hand",
    "Cloudkill",
    "Cone of Cold",
    "Conjure Elemental",
    "Contact Other Plane",
    "Creation",
    "Dominate Person",
    "Dream",
    "Geas",
    "Hold Monster",
    "Legend Lore",
    "Mislead",
    "Modify Memory",
    "Passwall",
    "Planar Binding",
    "Scrying",
    "Seeming",
    "Telekinesis",
    "Telepathic Bond",
    "Teleportation Circle",
    "Wall of Force",
    "Wall of Stone",
  ];
  const wizardLevel6 = [
    "Chain Lightning",
    "Circle of Death",
    "Contingency",
    "Create Undead",
    "Disintegrate",
    "Eyebite",
    "Flesh to Stone",
    "Freezing Sphere",
    "Globe of Invulnerability",
    "Guards and Wards",
    "Instant Summons",
    "Irresistible Dance",
    "Magic Jar",
    "Mass Suggestion",
    "Move Earth",
    "Programmed Illusion",
    "Sunbeam",
    "True Seeing",
    "Wall of Ice",
  ];
  const wizardLevel7 = [
    "Arcane Sword",
    "Delayed Blast Fireball",
    "Etherealness",
    "Finger of Death",
    "Forcecage",
    "Magnificent Mansion",
    "Mirage Arcane",
    "Plane Shift",
    "Prismatic Spray",
    "Project Image",
    "Reverse Gravity",
    "Sequester",
    "Simulacrum",
    "Symbol",
    "Teleport",
  ];
  const wizardLevel8 = [
    "Antimagic Field",
    "Antipathy/Sympathy",
    "Clone",
    "Control Weather",
    "Demiplane",
    "Dominate Monster",
    "Feeblemind",
    "Incendiary Cloud",
    "Maze",
    "Mind Blank",
    "Power Word Stun",
    "Sunburst",
  ];
  const wizardLevel9 = [
    "Astral Projection",
    "Foresight",
    "Gate",
    "Imprisonment",
    "Meteor Swarm",
    "Power Word Kill",
    "Prismatic Wall",
    "Shapechange",
    "Time Stop",
    "True Polymorph",
    "Weird",
    "Wish",
  ];

  const bardLists = [
    bardLevel0,
    bardLevel1,
    bardLevel2,
    bardLevel3,
    bardLevel4,
    bardLevel5,
    bardLevel6,
    bardLevel7,
    bardLevel8,
    bardLevel9,
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

  const druidLists = [
    druidLevel0,
    druidLevel1,
    druidLevel2,
    druidLevel3,
    druidLevel4,
    druidLevel5,
    druidLevel6,
    druidLevel7,
    druidLevel8,
    druidLevel9,
  ];
  const paladinLists = [
    paladinLevel1,
    paladinLevel2,
    paladinLevel3,
    paladinLevel4,
    paladinLevel5,
  ];
  const rangerLists = [
    rangerLevel1,
    rangerLevel2,
    rangerLevel3,
    rangerLevel4,
    rangerLevel5,
  ];

  const sorcererLists = [
    sorcererLevel0,
    sorcererLevel1,
    sorcererLevel2,
    sorcererLevel3,
    sorcererLevel4,
    sorcererLevel5,
    sorcererLevel6,
    sorcererLevel7,
    sorcererLevel8,
    sorcererLevel9,
  ];

  const warlockLists = [
    warlockLevel0,
    warlockLevel1,
    warlockLevel2,
    warlockLevel3,
    warlockLevel4,
    warlockLevel5,
    warlockLevel6,
    warlockLevel7,
    warlockLevel8,
    warlockLevel9,
  ];

  const wizardLists = [
    wizardLevel0,
    wizardLevel1,
    wizardLevel2,
    wizardLevel3,
    wizardLevel4,
    wizardLevel5,
    wizardLevel6,
    wizardLevel7,
    wizardLevel8,
    wizardLevel9,
  ];

  //   let classListToUse = eval(props.classSelected.toLowerCase() + "Lists");
  return (
    <div className="sL-container">
      {props.classSelected != null
        ? eval(props.classSelected.toLowerCase() + "Lists").map(
            // ? props.listofLists.map(
            (level, index) => {
              let listNumber = index;
              let spellLevel =
                props.classSelected !== "Paladin" &&
                props.classSelected !== "Ranger"
                  ? index === 0
                    ? "Cantrip"
                    : index
                  : index + 1;
              let spellList = "level" + listNumber;
              return level.length ? (
                // data-level={"level" + listNumber}
                // toggleList={this.toggleLevelList}
                <React.Fragment>
                  <h4
                    className="sL-level"
                    onClick={props.toggleList}
                    data-level={"level" + listNumber}
                  >
                    Spell Level: {spellLevel}
                  </h4>
                  <ul key={listNumber}>
                    {level.map((list, index) => {
                      const toggleKey = "level" + listNumber;
                      // console.log(toggleKey);
                      return (
                        <li
                          className={
                            props[toggleKey] === true
                              ? "sL-li"
                              : "sL-li sL-hidden"
                          }
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
