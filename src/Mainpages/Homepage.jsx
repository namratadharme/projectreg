import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div>
      <h1>welcome to homepage</h1>
      you are already logged In
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
