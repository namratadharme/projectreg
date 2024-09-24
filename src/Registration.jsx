import React, { useEffect, useState } from "react";
import "./Regist.css";
import { userRegistration } from "./Services/user.services";
import { Await } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleInput1(event) {
    setUsername(event.target.value);
  }
  function handleInput2(event) {
    setEmail(event.target.value);
  }
  function handleInput3(event) {
    setPassword(event.target.value);
  }
  async function handleSignup() {
    if (validation()) {
      try {
        setLoading(true);
        const reg = await userRegistration(username, email, password);
        console.log(reg, "registration successful");
        navigate("/login");
      } catch (error) {
      } finally {
        setLoading(false);
      }
    } else {
    }
  }
  function validation() {
    if (!email.includes("@")) {
      setError("email contain @");
      return false;
    }
    if (!email.includes(".")) {
      setError("email contain .");
      return false;
    } else {
      setError("");
      return true;
    }
  }

  useEffect(() => {
    if (username !== "" && email !== "" && password !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [username, email, password]);

  return (
    <>
      <div id="container">
        <h1 id="regi">Registration</h1>
        <label>Username</label>
        <input
          className="inputField"
          type="text"
          onChange={handleInput1}
        ></input>
        <label>Email</label>
        <input
          className="inputField"
          type="text"
          onChange={handleInput2}
        ></input>
        <label>Password</label>
        <input
          className="inputField"
          type="password"
          onChange={handleInput3}
        ></input>
        <p className="err">{error ? error : ""}</p>
        <button className="regBtn" onClick={handleSignup} disabled={!enable}>
          signup
        </button>
      </div>
    </>
  );
}

export default Registration;
