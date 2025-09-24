import React, { useState } from "react";
import { addPatient } from "../services/api";
import "./AddPatientForm.css";

const AddPatientForm = ({ isOpen, onClose, onAddPatient }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    phone: "",
    address: "",
    medicalHistory: "",
    lastVisit: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newPatient = await addPatient({
        ...formData,
        age: parseInt(formData.age),
      });
      onAddPatient(newPatient);
      setFormData({
        name: "",
        age: "",
        contact: "",
        phone: "",
        address: "",
        medicalHistory: "",
        lastVisit: "",
      });
    } catch (error) {
      console.error("Error adding patient:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay" onClick={onClose}>
      <div className="form-content" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2>Add New Patient</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>

        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Medical History:</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Visit:</label>
            <input
              type="date"
              name="lastVisit"
              value={formData.lastVisit}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Adding..." : "Add Patient"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientForm;
