const crypto = require("crypto");

async function generateHash(obj, sharedSecret) {
  // Extract all values from the object and join them with a period
  const initialString = Object.values(obj).join(".");
  const hashedString = crypto
    .createHash("sha1")
    .update(initialString)
    .digest("hex");

  // Step 2 and 3: Concatenate with shared secret and hash again
  const concatenatedString = `${hashedString}.${sharedSecret}`;
  const finalHash = crypto
    .createHash("sha1")
    .update(concatenatedString)
    .digest("hex");

  return finalHash;
}

module.exports = generateHash;
