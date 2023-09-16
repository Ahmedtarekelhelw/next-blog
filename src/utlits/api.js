import axios from "axios";

export const CustomAxios = axios.create({
  // baseURL: "http://localhost:3000/api/",
  baseURL: "https://next13-newblog.vercel.app/api/",
});
