import axios from "axios";

const configOptions = {
  development: "http://localhost:3001/api/",
  production: "https://www.web3artstore.com/api/",
};

const instance = axios.create({
  baseURL: configOptions[process.env.NODE_ENV],
});

export default instance;
