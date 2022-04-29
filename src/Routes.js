import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home.js";
import LoginPage from "./LoginPage";
import List from "./pages/List.js";
import Add from "./pages/Add.js";
import Update from "./pages/Update.js";
import { DataContext } from "./DataContext.js";

export default function AppRoutes() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(DataContext);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLoggedIn");
    if (isLogged === "true") {
      console.log(isLoggedIn);
      setIsLoggedIn(true);
      navigate("/home");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<Home />}>
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </>
  );
}
