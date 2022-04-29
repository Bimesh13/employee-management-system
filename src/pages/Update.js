import React, { useContext, useState } from "react";
import { EmployeeContext } from "../EmployeeContext";

export default function Update() {
  const { employeeData, deleteEmployee, editEmployee } =
    useContext(EmployeeContext);

  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = React.useState({});

  function callEdit(employee) {
    setEdit(true);
    setFormData(employee);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    editEmployee(
      formData.id,
      formData.name,
      formData.address,
      formData.dob,
      formData.designation
    );
    alert("Employee updated successfully!");
    setEdit(false);
  }
  return (
    <>
      <div className="employee-container">
        <h1 className="employee-update-heading">Update Employee Details:</h1>
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
                <button onClick={() => callEdit(data)}>Edit</button>
                <button onClick={() => deleteEmployee(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {edit && (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={formData.name}
              className="form--input"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="text"
              placeholder={formData.address}
              className="form--input"
              name="address"
              onChange={handleChange}
              value={formData.address}
            />
            <input
              type="date"
              placeholder={formData.dob}
              className="form--input"
              name="dob"
              onChange={handleChange}
              value={formData.dob}
            />
            <input
              type="designation"
              placeholder={formData.designation}
              className="form--input"
              name="designation"
              onChange={handleChange}
              value={formData.designation}
            />

            <button className="form--submit">Edit Employee</button>
          </form>
        </div>
      )}
    </>
  );
}
