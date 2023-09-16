import axios from "axios";

export const CustomAxios = axios.create({
  baseURL: "https://next13-newblog.vercel.app/api/",
});
