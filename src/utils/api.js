import { API_URI } from "react-native-dotenv";
import fetch from "./fetchWithTimeout";
import { store } from "../store";

export const HEADERS = {
  "Content-Type": "application/json"
};

const getToken = () => {
  const state = store.getState();

  if (state && state.auth && state.auth.token) {
    return state.auth.token;
  }
  return "";
};

export const apiRequest = async (path, options = {}, body) => {
  const token = getToken();
  const opts = { ...options, headers: options.headers || HEADERS };
  if (token) {
    opts.headers.Authorization = `JWT ${token}`;
  }

  if (body) {
    opts.body = JSON.stringify(body);
  }

  if (!options.timeout) {
    opts.timeout = 1000 * 10;
  }
  const result = await fetch(
    `${API_URI}${path}`,
    opts,
    opts.timeout
  ).then(response => response.json());

  if (result.error) {
    console.log(result.error);
    throw result.error;
  }

  return result;
};
