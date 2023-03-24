import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}`,
  headers: {
    Accept: "application/json",
  },
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status !== 401) {
      throw err;
    }

    if (typeof err.response.data.error.name !== "undefined") {
      if (err.reponse.data.error.name === "TokenExpiredError") {
        throw err;
      }
    }
  }
);

export default API;
