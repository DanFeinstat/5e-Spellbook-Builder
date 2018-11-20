import axios from "axios";

export default {
  createUser: userData => {
    return axios.post("/api/user/signup", userData);
  },
  deleteUser: id => {
    return axios.delete("/api/user/" + id);
  },
  addSpell: (id, spellData) => {
    return axios.put("/api/user/" + id, spellData);
  },
  getSpells: id => {
    return axios.get("/api/user/" + id);
  },
  login: userData => {
    return axios.post("/api/user/login", userData);
  },
};
