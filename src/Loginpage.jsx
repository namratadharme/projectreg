import React from "react";
import { useState } from "react";
import "./login.css";
import { useEffect } from "react";
import axios from "axios";
import { loginUser } from "./Services/user.services.js";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigateTo = useNavigate();

  function handleInput1(event) {
    setEmail(event.target.value);
  }
  function handleInput2(event) {
    setPassword(event.target.value);
  }
  async function handleSubmit() {
    if (validation()) {
      try {
        setLoading(true);
        const token = await loginUser(email, password);
        console.log("Token", token);
        localStorage.setItem("token", token);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  }

  function validation() {
    if (!email.includes("@")) {
      setError("email contain @ in this field");
      return false;
    }
    if (!email.includes(".")) {
      setError("email contain . in this field");
      return false;
    }
    if (password.length < 8) {
      setError("password contain  atleast 8 digit");
      return false;
    } else {
      setError("");
      return true;
    }
  }
  function handleLogout() {
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (!email == "" && !password == "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [email, password]);

  const localToken = localStorage.getItem("token");
  console.log(localToken);
  if (localToken === null) {
    return (
      <>
        <div id="container">
          <h1>Log-In</h1>
          <label>Email</label>
          <input
            type="text"
            className="inputField"
            onChange={handleInput1}
          ></input>
          <label>Password</label>
          <input
            type="password"
            className="inputField"
            onChange={handleInput2}
          ></input>
          <p id="paragraph">{error ? error : ""}</p>
          <button id="sub-btn" onClick={handleSubmit} disabled={!enable}>
            submit
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div>
        you are already logged in
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}
export default Loginpage;
