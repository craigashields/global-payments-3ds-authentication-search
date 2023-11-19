const generateHash = require("../utils/generateHash");
const validateFields = require("../utils/validateFields");
const { getFormattedTimestampWithMicroseconds } = require("../utils/timestamp");

const axios = require("axios");

async function callObtainAuthenticationData(requestParams) {
  // Declare variables
  const request_timestamp = await getFormattedTimestampWithMicroseconds();

  // List of required fields
  const requiredFields = [
    "merchant_id",
    "sharedSecret",
    "url",
    "server_trans_id",
  ];

  // validate fields
  const validationOutcome = await validateFields(requiredFields, requestParams);

  if (validationOutcome.status === "Fail") {
    throw new Error(validationOutcome.message);
  }

  // Destructure parameters from requestParams
  const { merchant_id, sharedSecret, url, server_trans_id } = requestParams;

  // Generate initial hash
  const authHash = await generateHash(
    {
      request_timestamp,
      merchant_id,
      server_trans_id,
    },
    sharedSecret
  );

  // Create request URL
  const requestUrl = `${url}${server_trans_id}?merchant_id=${merchant_id}&request_timestamp=${request_timestamp}`;

  // Set up Axios request configuration
  const config = {
    headers: {
      Authorization: `securehash ${authHash}`,
      "X-GP-VERSION": "2.2.0",
    },
  };

  // Call the API using Axios and log the response
  try {
    const response = await axios.get(requestUrl, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = callObtainAuthenticationData;
