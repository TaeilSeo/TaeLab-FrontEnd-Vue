import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/taelab",
  headers: {
    "Content-Type": "application/json",
  },
});
