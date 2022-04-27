import React from "react";
import Nav from "./Nav";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
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
