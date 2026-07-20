import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getParkOfficers = async () => {
  return await httpClient.get("/parkOfficers");
};

export const deleteParkOfficer = async (parkOfficerID) =>
  await httpClient.delete(`/parkOfficers/${parkOfficerID}`);

export const dismissParkOfficer = async (parkOfficerID) =>
  await httpClient.put(`/parkOfficers/${parkOfficerID}/dismiss`);

export const addParkOfficer = async (parkOfficer) =>
  await httpClient.post("/parkOfficers", parkOfficer);

export const updateParkOfficer = async (parkOfficerID, updatedData) =>
  await httpClient.put(`/parkOfficers/${parkOfficerID}`, updatedData);

export const getAllProtocols = async () => {
  return await httpClient.get("/protocols");
};

export const deleteProtocolById = async (parkOfficerId, protocolId) => {
  return await httpClient.delete(
    `/parkOfficers/${parkOfficerId}/protocols/${protocolId}`,
  );
};

export const updateProtocol = async (parkOfficerId, protocolId, updatedData) =>
  await httpClient.put(`/parkOfficers/${parkOfficerId}/protocols/${protocolId}`, updatedData);
