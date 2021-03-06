import axios from "axios";
import { API_KEY } from "../api/apiKey";

const ROOT_URL = `https://wordsapiv1.p.mashape.com/words/`;
const header = {
  headers: {
    "X-Mashape-Key": API_KEY
  }
};

export const searchWord = ({ word }) => {
  const url = ROOT_URL + word;
  return axios.get(url, header);
};

export const searchRhymes = ({ payload }) => {
  const word = payload;
  const url = `${ROOT_URL}${word}/rhymes`;
  return axios.get(url, header);
};

export const advancedSearch = ({ payload }) => {
  const { lettersAmount, firstLetter } = payload;
  const url = `${ROOT_URL}?letterPattern=^${firstLetter}.{${lettersAmount -
    1}}$`;
  return axios.get(url, header);
};
