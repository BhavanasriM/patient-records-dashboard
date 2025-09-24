import React from "react";
import "./PatientCard.css";

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="patient-card">
      <div className="patient-info">
        <h3 className="patient-name">{patient.name}</h3>
        <p className="patient-age">Age: {patient.age}</p>
        <p className="patient-contact">Contact: {patient.contact}</p>
        <p className="patient-phone">Phone: {patient.phone}</p>
      </div>
      <button
        className="view-details-btn"
        onClick={() => onViewDetails(patient)}
      >
        View Details
      </button>
    </div>
  );
};
export default PatientCard;
