import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../EmployeeContext";

export default function Add() {
  const { addEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    dob: "",
    designation: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addEmployee(
      formData.name,
      formData.address,
      formData.dob,
      formData.designation
    );
    setFormData({
      name: "",
      address: "",
      dob: "",
      designation: "",
    });
    alert("Employee added successfully!");
    navigate("/home");
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          className="form--input"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          placeholder="Employee Address"
          className="form--input"
          name="address"
          onChange={handleChange}
          value={formData.address}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="form--input"
          name="dob"
          onChange={handleChange}
          value={formData.dob}
        />
        <input
          type="designation"
          placeholder="Designation"
          className="form--input"
          name="designation"
          onChange={handleChange}
          value={formData.designation}
        />

        <button className="form--submit">Add Employee</button>
      </form>
    </div>
  );
}
