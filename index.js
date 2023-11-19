const callAuthenticationSearch = require("./api/callAuthenticationSearch");
const callObtainAuthenticationData = require("./api/callObtainAuthenticationData");
const {
  merchant_id,
  account_id,
  sharedSecret,
  searchApiUrl,
  obtainApiUrl,
} = require("./config/config");

async function main() {
  try {
    // Parameters for callAuthenticationSearch
    const start_timestamp = "2023-11-17T09:15:00.000000";
    const end_timestamp = "2023-11-17T12:00:00.000000";
    const server_trans_id = "ENTER SERVER TRANSACTION ID";

    const searchParams = {
      merchant_id,
      account_id,
      start_timestamp,
      end_timestamp,
      sharedSecret,
      url: searchApiUrl,
      server_trans_id, // Optional
    };

    // Call the Auth Search API
    const authSearchResult = await callAuthenticationSearch(searchParams);
    console.log(authSearchResult);

    // Parameters for callObtainAuthenticationData
    const obtainParams = {
      merchant_id,
      sharedSecret,
      url: obtainApiUrl,
      server_trans_id,
    };

    // Call the second API function
    const authDataResult = await callObtainAuthenticationData(obtainParams);
    console.log(authDataResult);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();
