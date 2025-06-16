import axios from "axios";

/* const API = axios.create({
  BASE_URL: "http://localhost:8000/api/", // your Django server URL
});
const BASE_URL = "http://localhost:8000/api"; */

const BASE_URL = "http://localhost:8000";

export const registerUser = async (userData) => {
  const res = await axios.post(`${BASE_URL}/api/register/`, userData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await axios.post(`${BASE_URL}/api/login/`, formData);
  return res.data;
};
export const logoutUser = async () => {
  const res = await axios.post(`${BASE_URL}/api/logout/`);
  return res.data;
};
