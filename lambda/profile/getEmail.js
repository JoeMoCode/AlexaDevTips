async function getEmail(handlerInput) {
  console.log(`<=== profile/getEmail.js ===>`);
  try {
    const client = handlerInput.serviceClientFactory.getUpsServiceClient();
    const email = await client.getProfileEmail();
    return email;
  } catch (error) {
    return undefined;
  }
}

module.exports = getEmail;
