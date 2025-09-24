import React, { useState, useEffect } from "react";
import PatientCard from "../components/PatientCard";
import SearchBar from "../components/SearchBar";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";
import { getPatients, getPatientById } from "../services/api";
import "./Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPatients(patients);
    } else {
      const filtered = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPatients(filtered);
    }
  }, [searchTerm, patients]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError(null);
      const patientsData = await getPatients();
      setPatients(patientsData);
      setFilteredPatients(patientsData);
    } catch (err) {
      setError(err.message || "Failed to fetch patients. Please try again.");
      console.error("Error fetching patients:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (patient) => {
    try {
      setDetailLoading(true);
      const patientDetails = await getPatientById(patient.id);
      setSelectedPatient(patientDetails);
      setIsModalOpen(true);
    } catch (err) {
      setError("Failed to load patient details. Please try again.");
      console.error("Error fetching patient details:", err);
    } finally {
      setDetailLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  const handleAddPatient = (newPatient) => {
    setPatients((prev) => [newPatient, ...prev]);
    setIsFormOpen(false);
    setSearchTerm("");
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return (
      <div className="patients-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading patient records...</p>
        </div>
      </div>
    );
  }

  if (error && patients.length === 0) {
    return (
      <div className="patients-page">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3>Error Loading Patients</h3>
          <p>{error}</p>
          <button onClick={fetchPatients} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="patients-page">
      <div className="page-header">
        <h1>Patient Records</h1>
        <button className="add-patient-btn" onClick={() => setIsFormOpen(true)}>
          + Add New Patient
        </button>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="close-error">
            x
          </button>
        </div>
      )}

      <div className="patients-info">
        <p>
          Showing {filteredPatients.length} of {patients.length} patients
        </p>
      </div>

      <div className="patients-grid">
        {filteredPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {filteredPatients.length === 0 && searchTerm && (
        <div className="no-results">
          <p>
            No patients found matching "<strong>{searchTerm}</strong>"
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="clear-search-btn"
          >
            Clear Search
          </button>
        </div>
      )}

      {filteredPatients.length === 0 && !searchTerm && !loading && (
        <div className="no-patients">
          <p>No patient records found.</p>
        </div>
      )}

      <PatientModal
        patient={selectedPatient}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isLoading={detailLoading}
      />

      <AddPatientForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAddPatient={handleAddPatient}
      />
    </div>
  );
};

export default Patients;
