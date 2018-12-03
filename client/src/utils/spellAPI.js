import axios from "axios";
export default {
  findAll: () => {
    return axios.get("/api/spell/");
  },
  findSpell: spellName => {
    return axios.get("/api/spell/spellname/" + spellName);
  },
  getClassList: classname => {
    return axios.get("/api/spell/" + classname);
  },
};
