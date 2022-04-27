import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginDetails((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      loginDetails.username === "admin" &&
      loginDetails.password === "admin"
    ) {
      navigate("/home");
    } else {
      alert("Login Credentials not matched!");
    }
  }
  return (
    <>
      <div className="login-layout">
        <form onSubmit={handleSubmit} className="login-box">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            className="input-field"
            value={loginDetails.username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="input-field"
            value={loginDetails.password}
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
