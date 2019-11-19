import { SERVER_URI, SERVER_PORT } from "react-native-dotenv";

export const API_URI = `http://${SERVER_URI}:${SERVER_PORT}`;

export const HEADERS = {
  "Content-Type": "application/json"
};
