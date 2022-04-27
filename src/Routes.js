import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import LoginPage from "./LoginPage";
import List from "./pages/List.js";
import Add from "./pages/Add.js";
import Update from "./pages/Update.js";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<Home />}>
            <Route index element={<List />} />
            <Route path="add" element={<Add />} />
            <Route path="update" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
