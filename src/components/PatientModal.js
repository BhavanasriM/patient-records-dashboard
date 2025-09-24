import React from "react";
import "./PatientModal.css";

const PatientModal = ({ patient, isOpen, onClose, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Patient Details</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>

        <div className="modal-body">
          {isLoading ? (
            <div className="modal-loading">
              <div className="loading-spinner"></div>
              <p>Loading patient details...</p>
            </div>
          ) : patient ? (
            <>
              <div className="detail-row">
                <label>Patient ID:</label>
                <span>#{patient.id}</span>
              </div>
              <div className="detail-row">
                <label>Name:</label>
                <span>{patient.name}</span>
              </div>
              <div className="detail-row">
                <label>Age:</label>
                <span>{patient.age} years</span>
              </div>
              <div className="detail-row">
                <label>Email:</label>
                <span>{patient.contact}</span>
              </div>
              <div className="detail-row">
                <label>Phone:</label>
                <span>{patient.phone}</span>
              </div>
              <div className="detail-row">
                <label>Address:</label>
                <span>{patient.address}</span>
              </div>
              <div className="detail-row">
                <label>Medical History:</label>
                <span>{patient.medicalHistory}</span>
              </div>
              <div className="detail-row">
                <label>Last Visit:</label>
                <span>{patient.lastVisit}</span>
              </div>
            </>
          ) : (
            <div className="modal-error">
              <p>Failed to load patient details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
