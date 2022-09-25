import axios from "axios";

const BASE_URL = `http://localhost:5000/api`;
// ---------------------------------------------------------------------
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjhjYjA4MWQ1NDFiZmQ1OTk1Yzg0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDA5MjMyNiwiZXhwIjoxNjY0MzUxNTI2fQ.iKmDBM5GEgX0AizM3A-SNHi5C38nwgMlR4ijrj1KONg`;
// ---------------------------------------------------------------------

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
