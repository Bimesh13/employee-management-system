import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/home" className="link-tag">
        <h1 className="logo-text">employee management system.</h1>
      </Link>
    </nav>
  );
}
