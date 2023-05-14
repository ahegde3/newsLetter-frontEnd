// import { BASE_URL } from "../constants/api";

const BASE_URL = "http://localhost:8080";
const getLetters = () => {
  return fetch(`${BASE_URL}/newsLetter/getLetters`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  }).then((result) => {
    if (result.ok) return result.json();
    else return undefined;
  });
};

export { getLetters };
