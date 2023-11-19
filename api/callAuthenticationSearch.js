const generateHash = require("../utils/generateHash");
const validateFields = require("../utils/validateFields");
const { getFormattedTimestampWithMicroseconds } = require("../utils/timestamp");

const axios = require("axios");

async function callAuthenticationSearch(requestParams) {
  // Declare variables
  const request_timestamp = await getFormattedTimestampWithMicroseconds();

  // List of required fields
  const requiredFields = [
    "merchant_id",
    "account_id",
    "start_timestamp",
    "end_timestamp",
    "sharedSecret",
    "url",
  ];

  // validate fields
  const validationOutcome = await validateFields(requiredFields, requestParams);

  if (validationOutcome.status === "Fail") {
    throw new Error(validationOutcome.message);
  }

  // Destructure parameters from requestParams
  const {
    merchant_id,
    account_id,
    start_timestamp,
    end_timestamp,
    sharedSecret,
    url,
    server_trans_id,
  } = requestParams;

  // Generate hash
  const authHash = await generateHash(
    {
      request_timestamp,
      merchant_id,
      start_timestamp,
    },
    sharedSecret
  );

  // Create request body
  const requestBody = {
    request_timestamp,
    merchant_id,
    account_id,
    start_timestamp,
    end_timestamp,
    server_trans_id,
  };

  // Set up Axios request configuration
  const config = {
    headers: {
      Authorization: `securehash ${authHash}`,
    },
  };

  // Call the API using Axios and log the response
  try {
    const response = await axios.post(url, requestBody, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = callAuthenticationSearch;
