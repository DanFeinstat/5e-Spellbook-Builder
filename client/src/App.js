import React from "react";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignupPage} />
        {/* <Route exact path="/dashboard/owner" component={OwnerPage} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default App;

// import React, { Component } from "react";
// import "./App.css";
// //Components
// import ClassSelection from "./components/Search/ClassSelection";
// import ClassSelBtn from "./components/Search/ClassSelBtn";
// import Search from "./components/Search/Search";
// import Card from "./components/Card/Card";

// class App extends Component {
//   state = {
//     searchActive: false,
//     search: "",
//     classList: null,
//     spellFound: false,
//     currentSpell: {},
//   };

//   handleInputChange = e => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({
//       [name]: value,
//     });
//   };

//   titleCase = str => {
//     str = str.toLowerCase().split(" ");
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(" ");
//   };

//   onSpellSubmit = e => {
//     e.preventDefault();
//     const queryURL =
//       "http://www.dnd5eapi.co/api/spells/" +
//       this.state.classList.toLowerCase() +
//       "/";
//     let spellName = this.state.search.trim();
//     let toSubmit = this.titleCase(spellName);
//     // console.log(toSubmit);
//     // console.log(queryURL);
//     fetch(queryURL)
//       .then(response => response.json())
//       .then(res => {
//         // console.log(res);
//         for (let i = 0; i < res.results.length; i++) {
//           if (res.results[i].name === toSubmit) {
//             console.log(res.results[i].url);
//             fetch(res.results[i].url)
//               .then(response => response.json())
//               .then(data => {
//                 let desc = [];
//                 if (Array.isArray(data.desc)) {
//                   for (let i = 0; i < data.desc.length; i++) {
//                     const newDesc = data.desc[i]
//                       .replace(/â€™/g, "'")
//                       .replace(/â€“/g, "-")
//                       .replace(/â€”/g, "-")
//                       .replace(/â€œ/g, '"')
//                       .replace(/â€�/g, '"');
//                     desc.push(newDesc);
//                   }
//                 } else {
//                   let newDesc = data.desc
//                     .replace(/â€™/g, "'")
//                     .replace(/â€“/g, "-")
//                     .replace(/â€”/g, "-")
//                     .replace(/â€œ/g, '"')
//                     .replace(/â€�/g, '"');
//                   desc.push(newDesc);
//                 }
//                 const fixMaterialCharacters = data => {
//                   if (data.material === undefined) {
//                     return undefined;
//                   } else if (
//                     Array.isArray(data.material) &&
//                     data.material.length > 1
//                   ) {
//                     let materials = [];
//                     for (let i = 0; i < data.material.length; i++) {
//                       const newMaterials = data.material[i]
//                         .replace(/â€™/g, "'")
//                         .replace(/â€œ/g, '"')
//                         .replace(/â€�/g, '"');
//                       materials.push(newMaterials);
//                     }
//                     return materials;
//                   } else {
//                     let newMaterials = data.material.replace(/â€™/g, "'");
//                     return newMaterials;
//                   }
//                 };
//                 let materials = fixMaterialCharacters(data);

//                 const spellData = {
//                   name: data.name,
//                   range: data.range,
//                   duration: data.duration,
//                   materials: materials,
//                   ritual: data.ritual,
//                   concentration: data.concentration,
//                   components: data.components,
//                   desc: desc,
//                   higherLevel: data.higher_level,
//                   school: data.school.name,
//                   castingTime: data.casting_time,
//                   level: data.level,
//                 };
//                 this.setState({
//                   currentSpell: spellData,
//                   spellFound: true,
//                   searchActive: false,
//                 });
//               })
//               .catch(function(error) {
//                 console.log(error);
//               });
//           }
//         }
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   };

//   toSelectClass = e => {
//     const newClass = e.target.textContent;
//     this.setState({
//       searchActive: true,
//       classList: newClass,
//     });
//   };
//   render() {
//     const classes = [
//       "Bard",
//       "Cleric",
//       "Druid",
//       "Paladin",
//       "Ranger",
//       "Sorcerer",
//       "Warlock",
//       "Wizard",
//     ];
//     return (
//       <div className={"App App-background-" + this.state.classList}>
//         {this.state.searchActive ? (
//           <Search
//             inputChange={this.handleInputChange}
//             onSubmit={this.onSpellSubmit}
//           />
//         ) : (
//           <ClassSelection>
//             {classes.map((value, index) => {
//               return (
//                 <ClassSelBtn
//                   selecClass={this.toSelectClass}
//                   key={index}
//                   name={value}
//                 />
//               );
//             })}
//           </ClassSelection>
//         )}
//         {this.state.spellFound ? (
//           <Card spell={this.state.currentSpell} />
//         ) : null}
//       </div>
//     );
//   }
// }

// export default App;
