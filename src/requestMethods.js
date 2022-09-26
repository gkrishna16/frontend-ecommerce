import axios from "axios";

const BASE_URL = `http://localhost:5000/api`;
// ---------------------------------------------------------------------
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjhjYjA4MWQ1NDFiZmQ1OTk1Yzg0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDE1MDkzMywiZXhwIjoxNjY0NDEwMTMzfQ.7xVjehurwt6SYSyv52BOes8rgZn5AALLbW_JGfIH38w`;
// ---------------------------------------------------------------------

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
