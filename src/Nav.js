import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

export default function Nav() {
  const { setIsLoggedIn } = useContext(DataContext);
  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <nav>
      <Link to="/home" className="link-tag">
        <h1 className="logo-text">employee management system.</h1>
      </Link>
      <button onClick={logOut}>Log Out</button>
    </nav>
  );
}
