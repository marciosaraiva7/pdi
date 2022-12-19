import axios from "axios";

let service = axios.create({
  baseURL: "http://pdi-backend-next.vercel.app",
  responseType: "json"
});

export default service;
