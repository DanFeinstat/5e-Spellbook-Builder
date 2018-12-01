import axios from "axios";
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

export default {
  createUser: userData => {
    return axios.post("/api/user/signup", userData);
  },
  getUser: id => {
    return axios.get("/api/user/data/" + id);
  },

  deleteUser: id => {
    return axios.delete("/api/user/" + id);
  },
  addSpell: (id, username, spellData) => {
    return axios.put("/api/user/" + id + "/" + username, spellData);
  },
  getSpells: id => {
    return axios.get("/api/user/" + id);
  },
  login: userData => {
    return axios.post("/api/user/login", userData);
  },
  deleteSpell: (id, username, spellName) => {
    return axios.put(
      "/api/user/deletespell/" + id + "/" + username + "/" + spellName
    );
  },
};
