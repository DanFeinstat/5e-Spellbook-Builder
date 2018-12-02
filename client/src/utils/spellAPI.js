import axios from "axios";
export default {
  getClassList: classname => {
    return axios.get("/api/spell/" + classname);
  },
};
