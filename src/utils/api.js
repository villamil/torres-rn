import { SERVER_URI, SERVER_PORT } from "react-native-dotenv";
console.log(SERVER_URI);
export const API_URI = `${SERVER_URI}:${SERVER_PORT}`;

export const HEADERS = {
  "Content-Type": "application/json"
};
