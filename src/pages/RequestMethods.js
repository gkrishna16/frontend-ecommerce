import axios from "axios";

const BASE_URL = `http://localhost:5001/api/`;

const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjhjYjA4MWQ1NDFiZmQ1OTk1Yzg0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzcwNjY2NywiZXhwIjoxNjYzOTY1ODY3fQ.CyAj7V-elnZR5GY-hV9WaxUEz1T11Qic06o5cLihgsE`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
