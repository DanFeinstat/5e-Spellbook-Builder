import axios from "axios";
export default {
  findAll: () => {
    return axios.get("/api/spell/");
  },
  getClassList: classname => {
    return axios.get("/api/spell/" + classname);
  },
};
