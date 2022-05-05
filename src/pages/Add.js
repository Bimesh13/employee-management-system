import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../EmployeeContext";

export default function Add() {
  const { addEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);

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
    setModalState(true);
  }

  function goToHome() {
    setModalState(false);
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
      {modalState && (
        <div
          class="modal"
          tabindex="-1"
          id="reg-modal"
          style={{ display: modalState ? "block" : "none" }}
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Employee Added</h5>
              </div>
              <div class="modal-body">
                <p>Employee details has been added successfully.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={goToHome}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
