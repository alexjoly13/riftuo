import axios from "axios";

const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }

  alert("Sorry! Something went wrong. Try again later");

  throw err;
}

export const postSummonerSignup = (userData) => {
  return backendApi.post("/signup", userData).catch(errorHandler);
};

export const postValidatedSignup = (userData) => {
  return backendApi.post("/signup/confirmed", userData).catch(errorHandler);
};

export const postLogin = (userData) => {
  return backendApi.post("/login", userData).catch(errorHandler);
};
