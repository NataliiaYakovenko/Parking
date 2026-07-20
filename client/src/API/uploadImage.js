export const addProtocolImage = async (images, protocolId) => {
  const url = `http://localhost:5000/api/parkOfficers/protocols/${protocolId}/images`;

  const requestOptions = {
    method: "POST",
    body: images,
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
