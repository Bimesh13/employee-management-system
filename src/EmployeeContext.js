import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employeeData, setEmployeeData] = useState([]);

  function addEmployee(name, address, dob, designation) {
    setEmployeeData([
      ...employeeData,
      { id: uuid(), name, address, dob, designation },
    ]);
  }
  return (
    <EmployeeContext.Provider value={{ employeeData, addEmployee }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
