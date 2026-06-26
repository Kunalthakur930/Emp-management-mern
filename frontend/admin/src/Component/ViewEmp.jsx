import { useEffect, useState } from "react";
import axios from "axios";
import "../Css_files/ViewEmp.css";

const ViewEmp = () => {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    salary: "",
    role: "",
    age: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8052/emp/get", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      setEmployees(response.data);
    } catch (error) {
      console.log("Error fetching Employees", error);
    }
  };

  const deleteEmp = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        await axios.delete(`http://localhost:8052/emp/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        fetchEmployees();
      } catch (error) {
        console.log("Delete error", error);
      }
    }
  };

  const editEmp = (emp) => {
    setEditId(emp._id);
    setFormData({
      name: emp.name,
      email: emp.email,
      salary: emp.salary,
      role: emp.role,
      age: emp.age,
    });
  };

  const updateEmp = async () => {
    try {
      await axios.put(`http://localhost:8052/emp/update/${editId}`, formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      setEditId(null);
      // Resetting to correct fields
      setFormData({ name: "", email: "", salary: "", role: "", age: "" });
      fetchEmployees();
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <div className="view-container">
      <div className="table-card">
        <div className="table-header">
          <h2>Employee Directory</h2>
          <p>Manage and monitor all registered employees</p>
        </div>

        <div className="table-responsive">
          <table className="emp-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emps, index) => (
                  <tr key={emps._id}>
                    <td>{index + 1}</td>
                    <td className="emp-name">{emps.name}</td>
                    <td>{emps.email}</td>
                    <td>
                      <span className="role-badge">{emps.role}</span>
                    </td>
                    <td>₹{emps.salary}</td>
                    <td>{emps.age}</td>
                    <td className="action-btns">
                      <button
                        className="btn-edit"
                        onClick={() => editEmp(emps)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => deleteEmp(emps._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-data">
                    No Employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Form Overlay (Modal style) */}
      {editId && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Update Employee Info</h3>
            <div className="modal-grid">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Salary"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Age"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />
            </div>
            <div className="modal-actions">
              <button className="btn-save" onClick={updateEmp}>
                Save Changes
              </button>
              <button className="btn-cancel" onClick={() => setEditId(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewEmp;
