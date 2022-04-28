import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const data = useContext(DataContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    }
    setPassword(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username === data.username && password === data.password) {
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
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="input-field"
            value={password}
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
