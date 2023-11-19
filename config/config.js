require("dotenv").config();

module.exports = {
  merchant_id: process.env.MERCHANT_ID,
  account_id: process.env.ACCOUNT_ID,
  sharedSecret: process.env.SHARED_SECRET,
  searchApiUrl: process.env.SEARCH_API_URL,
  obtainApiUrl: process.env.OBTAIN_API_URL,
};
