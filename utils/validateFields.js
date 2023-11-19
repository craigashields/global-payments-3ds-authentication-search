async function validateFields(requiredFields, request) {
  // Validate required fields
  for (const field of requiredFields) {
    if (!request[field]) {
      return {
        status: "Fail",
        message: `Missing required field: ${field}`,
      };
    }
  }
  return {
    status: "Success",
    message: `All required fields provided`,
  };
}

module.exports = validateFields;
