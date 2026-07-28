import axios from "axios";

const httpCllient = axios.create({
  baseURL: "http://localhost:5000/api/users",
});

export const loginUser = async (userData) =>
  await httpCllient.post(`/sign-in`, userData);

export const registerUser = async (userData) =>
  await httpCllient.post(`/sign-up`, userData);
