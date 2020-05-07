import axios from "axios";

const CVbaseUrl =
  "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/";

export default axios.create({
  baseURL: CVbaseUrl,
  responseType: "json",
});
