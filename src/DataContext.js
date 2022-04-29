import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [userData, setUserData] = useState({
    username: "admin",
    password: "admin",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <DataContext.Provider value={{ userData, isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
