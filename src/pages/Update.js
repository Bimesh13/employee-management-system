import React, { useContext, useState } from "react";
import { EmployeeContext } from "../EmployeeContext";

export default function Update() {
  const { employeeData, deleteEmployee, editEmployee } =
    useContext(EmployeeContext);

  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = React.useState({});

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteID, setDeleteID] = useState();

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
    setEdit(false);
    setEditModal(true);
  }
  function deleteAction(id) {
    setDeleteID(id);
    setDeleteModal(true);
  }
  function deleteRecord() {
    deleteEmployee(deleteID);
    setDeleteModal(false);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  function closeDeleteModal() {
    setDeleteModal(false);
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
                <button
                  onClick={() => {
                    deleteAction(data.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
        {deleteModal && (
          <div
            class="modal"
            tabindex="-1"
            style={{ display: deleteModal ? "block" : "inline" }}
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Delete Prompt</h5>
                </div>
                <div class="modal-body">
                  <p>Do you want to delete the record?</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeDeleteModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={deleteRecord}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
      {editModal && (
        <div
          class="modal"
          tabindex="-1"
          id="reg-modal"
          style={{ display: editModal ? "block" : "none" }}
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Employee Edited</h5>
              </div>
              <div class="modal-body">
                <p>Employee details has been edited successfully.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeEditModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
