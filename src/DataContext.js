import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [userData, setUserData] = useState({
    username: "admin",
    password: "admin",
  });
  return (
    <DataContext.Provider value={userData}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
