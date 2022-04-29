import React, { useContext } from "react";
import Nav from "./Nav";
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import { DataContext } from "./DataContext";

export default function Home() {
  const { isLoggedIn } = useContext(DataContext);
  if (!isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to="/" />;
  }
  return (
    <>
      <Nav />
      <ul className="menu-tab">
        <li>
          <Link to="/home/add" className="link-tag">
            <div className="link-element">Add</div>
          </Link>
        </li>
        <li>
          <Link to="/home/update" className="link-tag">
            <div className="link-element">Update</div>
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
