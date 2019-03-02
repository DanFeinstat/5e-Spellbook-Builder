import React, { Component } from "react";
import { Spring, Transition, animated } from "react-spring/renderprops";
import userAPI from "../utils/userAPI";
import SpellItem from "../components/Spellbook/SpellItem";
import Spellbook from "../components/Spellbook/Spellbook";
import Card from "../components/Card/Card";
import styles from "./Pages.module.css";
import LogoutBtn from "../components/Spellbook/LogoutBtn";
import MenuBtn from "../components/MenuBtn/MenuBtn";
import Menu from "../components/Menu/Menu";
import SbRow from "../components/Spellbook/SbRow";
import { UserConsumer } from "../components/Context/Context";
// import { animated } from "react-spring/renderprops-universal";
const jwt = require("jsonwebtoken");

class SpellbookPage extends React.PureComponent {
  state = {
    id: "",
    names: [],
    nameDisplayed: this.context.nameDisplayed,
    email: "",
    spells: [],
    listsByLevels: [],
    spellToDisplay: "",
    levelToDisplay: "",
    newBookName: "",
    menuActive: false,
    bookMenuActive: false,
    creatingNewBook: false,
  };
  static contextType = UserConsumer;
  componentDidMount() {
    console.log(this.context);
    this.decodeUserIDandPopulate();
  }

  decodeUserIDandPopulate = () => {
    const decoder = jwt.decode(localStorage.spellbookJwt);
    const decodedID = decoder.id;
    this.setState(
      {
        id: decodedID,
      },
      this.populateSpellbook
    );
  };

  deleteSpellFromSpellbook = e => {
    userAPI
      .deleteSpell(
        this.state.id,
        this.state.nameDisplayed,
        this.state.spellToDisplay.name
      )
      .then(response => {
        this.setState(
          {
            spellToDisplay: "",
          },
          this.populateSpellbook()
        );
      })
      .catch(err => console.log(err));
  };

  populateSpellbook = () => {
    userAPI
      .getSpells(this.state.id)
      .then(response => {
        let spellbookIndex = this.spellbookForIn(
          this.context.nameDisplayed,
          response.data.spellbooks
        );
        const alphabetizedSpells = response.data.spellbooks[
          spellbookIndex
        ].spells.sort(function(a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });

        let spellsByLevel = [];
        let level0 = [];
        let level1 = [];
        let level2 = [];
        let level3 = [];
        let level4 = [];
        let level5 = [];
        let level6 = [];
        let level7 = [];
        let level8 = [];
        let level9 = [];
        for (let k = 0; k < alphabetizedSpells.length; k++) {
          if (
            alphabetizedSpells[k].level === -1 ||
            alphabetizedSpells[k].level === 0
          ) {
            spellsByLevel.push(alphabetizedSpells[k]);
            level0.push(alphabetizedSpells[k]);
          }
        }
        for (let i = 1; i < 10; i++) {
          for (let j = 0; j < alphabetizedSpells.length; j++) {
            if (alphabetizedSpells[j].level === i) {
              spellsByLevel.push(alphabetizedSpells[j]);
              eval("level" + i).push(alphabetizedSpells[j]);
            }
          }
        }

        let listOfLists = [];
        for (let l = 0; l < 10; l++) {
          let listFragment = eval("level" + l);
          listOfLists.push(listFragment);
        }

        this.setState({
          names: response.data.names,
          nameDisplayed: response.data.spellbooks[spellbookIndex].name,
          email: response.data.email,
          spells: spellsByLevel,
          listsByLevels: listOfLists,
        });
      })
      .catch(err => console.log(err));
  };

  spellbookForIn = (name, array) => {
    for (let i = 0; i < array.length; i++) {
      let obj = array[i];
      for (const property in obj) {
        if (obj[property] === name) {
          return i;
        }
      }
    }
    return 0;
  };

  populateChangedSpellbook = spellbookName => {
    userAPI
      .getSpells(this.state.id)
      .then(response => {
        let spellbookIndex = this.spellbookForIn(
          spellbookName,
          response.data.spellbooks
        );

        let alphabetizedSpells = response.data.spellbooks[
          spellbookIndex
        ].spells.sort(function(a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });

        let spellsByLevel = [];
        let level0 = [];
        let level1 = [];
        let level2 = [];
        let level3 = [];
        let level4 = [];
        let level5 = [];
        let level6 = [];
        let level7 = [];
        let level8 = [];
        let level9 = [];
        for (let k = 0; k < alphabetizedSpells.length; k++) {
          if (
            alphabetizedSpells[k].level === -1 ||
            alphabetizedSpells[k].level === 0
          ) {
            spellsByLevel.push(alphabetizedSpells[k]);
            level0.push(alphabetizedSpells[k]);
          }
        }
        for (let i = 1; i < 10; i++) {
          for (let j = 0; j < alphabetizedSpells.length; j++) {
            if (alphabetizedSpells[j].level === i) {
              spellsByLevel.push(alphabetizedSpells[j]);
              eval("level" + i).push(alphabetizedSpells[j]);
            }
          }
        }

        let listOfLists = [];
        for (let l = 0; l < 10; l++) {
          let listFragment = eval("level" + l);
          listOfLists.push(listFragment);
        }

        this.setState({
          names: response.data.names,
          // nameDisplayed: response.data.spellbooks[0].name,
          // email: response.data.email,
          spells: spellsByLevel,
          listsByLevels: listOfLists,
        });
      })
      .catch(err => console.log(err));
  };

  alphabetizeObjArr = objArr => {
    objArr.sort(function(a, b) {
      return a.name > b.name;
    });
  };

  displaySpell = e => {
    for (let i = 0; i < this.state.spells.length; i++) {
      if (this.state.spells[i].name === e.target.dataset.name) {
        this.setState({
          spellToDisplay: this.state.spells[i],
        });
      }
    }
  };

  toLogout = e => {
    e.preventDefault();
    localStorage.clear(localStorage.spellbookJwt);
    this.setState(
      {
        id: "",
        name: "",
        email: "",
        spells: [],
        spellToDisplay: "",
      },
      (window.location.href = "/")
    );
  };

  toSearchPage = e => {
    e.stopPropagation();
    this.props.history.push("/");
  };

  toggleMenu = e => {
    e.preventDefault();

    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
      bookMenuActive: false,
      creatingNewBook: false,
    }));
  };

  toggleBookMenu = e => {
    e.stopPropagation();
    this.setState(prevState => ({
      bookMenuActive: !prevState.bookMenuActive,
    }));
  };

  // toEditMode = e => {
  //   if (this.state.editMode) {
  //     const name = e.target.name;
  //     this.setState(prevState => ({
  //       [name]: !prevState[name],
  //     }));
  //   }
  // };

  // selectTheme = () => {};

  // verifyEdit = () => {};
  // editBookName = () => {};
  stopProp = e => {
    e.stopPropagation();
  };
  createNewBook = e => {
    e.stopPropagation();
    e.preventDefault();
    let bookName = this.state.newBookName;
    // console.log(bookName);
    let userInput = {
      name: bookName,
      spells: [],
    };
    if (bookName.length > 0) {
      userAPI
        .newBook(this.state.id, userInput)
        .then(response => {
          this.setState(
            {
              nameDisplayed: bookName,
              menuActive: false,
              bookMenuActive: false,
              creatingNewBook: false,
              newBookName: "",
              spellToDisplay: "",
            },
            this.populateChangedSpellbook(bookName)
          );
          console.log("function fired");
        })
        .catch(err => console.log(err));
    } else {
      alert("Please enter a Name");
    }
  };

  handleInputChange = e => {
    e.stopPropagation();
    e.preventDefault();
    let name = e.target.dataset.name;
    let value = e.target.value;
    if (e.target.value.length > 14) {
      e.target.value = this.state[name];
    } else {
      this.setState({ [name]: value });
    }
  };

  toggleBookForm = e => {
    e.stopPropagation();
    this.setState(prevState => ({
      creatingNewBook: !prevState.creatingNewBook,
    }));
  };

  selectDifferentBook = e => {
    e.stopPropagation();
    let toBeDisplayed = e.target.dataset.name;
    this.setState({
      nameDisplayed: toBeDisplayed,
      bookMenuActive: false,
      menuActive: false,
    });
  };

  render() {
    return (
      <UserConsumer>
        {({ updateNameDisplayed, nameDisplayed }) => (
          <div className={styles.spellbookContainer}>
            <div className={styles.spellbookContent}>
              <h2 className={styles.spellbookTitle}>
                {nameDisplayed ? (
                  <span>{nameDisplayed}</span>
                ) : (
                  <span>{this.state.nameDisplayed}</span>
                )}
                's Spellbook
              </h2>
              <div className={styles.spellbookMenuSpacing}>
                <MenuBtn
                  active={this.state.menuActive}
                  toggleShape={this.toggleMenu}
                >
                  <Transition
                    native
                    items={this.state.menuActive}
                    from={{ position: "absolute", opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                  >
                    {show =>
                      show &&
                      (props => (
                        <animated.div style={props}>
                          <Menu
                            // displayMenu={this.state.menuActive}
                            stopProp={this.stopProp}
                            spellSearch={this.toSearchPage}
                            handleInputChange={this.handleInputChange}
                            newBook={e => {
                              e.stopPropagation();
                              e.preventDefault();
                              let bookName = this.state.newBookName;
                              // console.log(bookName);
                              let userInput = {
                                name: bookName,
                                spells: [],
                              };
                              if (bookName.length > 0) {
                                userAPI
                                  .newBook(this.state.id, userInput)
                                  .then(response => {
                                    this.setState(
                                      {
                                        nameDisplayed: bookName,
                                        menuActive: false,
                                        bookMenuActive: false,
                                        creatingNewBook: false,
                                      },
                                      () => {
                                        updateNameDisplayed(
                                          this.state.nameDisplayed
                                        );
                                        this.populateChangedSpellbook(bookName);
                                      }
                                    );
                                    console.log("function fired");
                                  })
                                  .catch(err => console.log(err));
                              } else {
                                alert("Please enter a Name");
                              }
                            }}
                            toggleBookMenu={this.toggleBookMenu}
                            bookMenuActive={this.state.bookMenuActive}
                            logout={this.toLogout}
                            names={this.state.names}
                            toggleBookForm={this.toggleBookForm}
                            creatingNewBook={this.state.creatingNewBook}
                            chooseBook={
                              // this.selectDifferentBook
                              e => {
                                e.stopPropagation();
                                let toBeDisplayed = e.target.dataset.name;
                                this.setState(
                                  {
                                    nameDisplayed: toBeDisplayed,
                                    bookMenuActive: false,
                                    menuActive: false,
                                  },
                                  () => {
                                    updateNameDisplayed(
                                      this.state.nameDisplayed
                                    );
                                    this.populateChangedSpellbook(
                                      this.state.nameDisplayed
                                    );
                                  }
                                );
                              }
                            }
                          />
                        </animated.div>
                      ))
                    }
                  </Transition>
                </MenuBtn>
              </div>
              {/* <LogoutBtn logout={this.createNewBook} text={"New Spellbook"} /> */}
              {/* <LogoutBtn logout={this.toSearchPage} text={"Spell Search"} /> */}
              {/* <LogoutBtn logout={this.toLogout} text={"Log Out"} /> */}
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => (
                  <div style={props}>
                    <Spellbook>
                      {this.state.listsByLevels.map((level, index) => {
                        let listNumber = index;
                        let spellLevel = index === 0 ? "Cantrip" : index;
                        return level.length ? (
                          <Spring
                            delay={300}
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                          >
                            {props => (
                              <div style={props}>
                                <SbRow level={spellLevel} key={listNumber}>
                                  {level.map((list, index) => {
                                    return (
                                      <Spring
                                        delay={600}
                                        from={{ opacity: 0 }}
                                        to={{ opacity: 1 }}
                                      >
                                        {props => (
                                          <div style={props}>
                                            <li
                                              className={styles.spellbookLi}
                                              key={index}
                                              data-name={list.name}
                                              onClick={this.displaySpell}
                                            >
                                              {list.name}
                                            </li>
                                          </div>
                                        )}
                                      </Spring>
                                    );
                                  })}
                                </SbRow>
                              </div>
                            )}
                          </Spring>
                        ) : null;
                      })}
                    </Spellbook>
                  </div>
                )}
              </Spring>
              {this.state.spellToDisplay ? (
                <div className={styles.spellbookCardContainer}>
                  <Transition
                    items={this.state.spellToDisplay}
                    from={{
                      transform: "translate3d(200px,0,0)",
                      opacity: 0,
                    }}
                    enter={{
                      transform: "translate3d(0px,0,0)",
                      opacity: 1,
                    }}
                    leave={{
                      transform: "translate3d(200px,0,0)",
                      opacity: 0,
                    }}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div style={props}>
                          <Card
                            username={this.state.names[0]}
                            page="spellbook"
                            spell={this.state.spellToDisplay}
                            class={"none"}
                            loggedIn={this.state.id}
                            removeSpell={this.deleteSpellFromSpellbook}
                            scrollActive={
                              window.innerWidth < 1000 ? true : false
                            }
                          />
                        </div>
                      ))
                    }
                  </Transition>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default SpellbookPage;
