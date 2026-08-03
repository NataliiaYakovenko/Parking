import axios from "axios";

const httpCllient = axios.create({
  baseURL: "http://localhost:5000/api/users",
});

export const loginUser = async (userData) =>
  await httpCllient.post(`/sign-in`, userData, geolocation);

export const registerUser = async (userData) =>
  await httpCllient.post(`/sign-up`, userData, geolocation);

let geolocation;
navigator.geolocation.getCurrentPosition(
  ({ coords: { latitude, longitude } }) => {
    geolocation = `${latitude}, ${longitude}`;
  },
);



export const getAllUsers=async()=> {
  return await httpCllient.get('/users/all')
}

export const getAllBandUsers=async()=>{
  return await httpCllient.get('/users/all/band')
}
