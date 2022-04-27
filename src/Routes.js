import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import LoginPage from "./LoginPage";
import Add from "./pages/Add.js";
import Update from "./pages/Update.js";
import Delete from "./pages/Delete.js";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<Home />}>
            <Route path="add" element={<Add />} />
            <Route path="update" element={<Update />} />
            <Route path="delete" element={<Delete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
