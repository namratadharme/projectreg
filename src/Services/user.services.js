import { registrationEndpoint, loginEndpoint } from "../constants/urls";
import axios from "axios";

async function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    const payload = { email, password };
    axios
      .post(loginEndpoint, payload)
      .then((response) => {
        const {
          data: { token },
        } = response;
        resolve(token);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

async function userRegistration(username, email, password) {
  return new Promise((resolve, reject) => {
    const payload = { username, email, password };
    axios
      .post(registrationEndpoint, payload)
      .then((response) => {
        resolve("registration successful", response.data);
        console.log("registration successful", response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export { loginUser, userRegistration };
