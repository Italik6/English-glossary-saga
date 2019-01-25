import axios from "axios";
import { API_KEY } from "../api/apiKey";

const ROOT_URL = `https://wordsapiv1.p.mashape.com/words/`;

export const searchWord = ({ word }) => {
  console.log("api action", word);
  const url = ROOT_URL + word;

  return axios.get(url, {
    headers: {
      "X-Mashape-Key": API_KEY
    }
  });
};
