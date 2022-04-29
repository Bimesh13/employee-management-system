import React, { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";

export default function Update() {
  const { employeeData } = useContext(EmployeeContext);
  return (
    <>
      <div className="employee-container">
        <h1 className="employee-heading">Employee Details</h1>
        <table className="employee-table">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Designation</th>
            <th>Options</th>
          </tr>
          {employeeData.map((data) => (
            <tr className="employee-details" key={data.id}>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.dob}</td>
              <td>{data.designation}</td>
              <td className="update-buttons">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
