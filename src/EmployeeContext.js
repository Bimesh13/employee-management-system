import React, { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("employees");
    if (localData) {
      setEmployeeData(JSON.parse(localData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employeeData));
  }, [employeeData]);

  function addEmployee(name, address, dob, designation) {
    setEmployeeData([
      ...employeeData,
      { id: uuid(), name, address, dob, designation },
    ]);
  }

  function deleteEmployee(id) {
    const updatedArray = employeeData.filter((employee) => employee.id !== id);
    setEmployeeData(updatedArray);
  }

  function editEmployee(id, name, address, dob, designation) {
    const updatedArray = employeeData.map((employee) => {
      if (employee.id === id) {
        return { ...employee, name, address, dob, designation };
      }
      return employee;
    });
    setEmployeeData(updatedArray);
  }
  return (
    <EmployeeContext.Provider
      value={{ employeeData, addEmployee, deleteEmployee, editEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
