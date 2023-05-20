import { BASE_URL } from "../constants/api";

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

const updateLetterReadStatus = (id, status) => {
  return fetch(`${BASE_URL}/newsLetter/updateLetterReadStatus`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({ id, status }),
  }).then((result) => {
    if (result.ok) return result.json();
    else return undefined;
  });
};

const refreshLetters = (id, status) => {
  return fetch(`${BASE_URL}/newsLetter/refreshLetters`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  });
};

export { getLetters, updateLetterReadStatus, refreshLetters };
