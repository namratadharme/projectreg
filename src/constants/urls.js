const baseUrl = "https://ihd0l2wn82.execute-api.us-east-1.amazonaws.com/dev/";
const loginEndpoint = `${baseUrl}user/login`;

const registrationEndpoint = `${baseUrl}user/signup`;

const url = { loginEndpoint, registrationEndpoint };

module.exports = url;
