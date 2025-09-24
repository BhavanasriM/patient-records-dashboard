const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const transformUserToPatient = (user) => ({
  id: user.id,
  name: user.name,
  age: Math.floor(Math.random() * 80) + 18,
  contact: user.email,
  phone: user.phone,
  address: `${user.address.street}, ${user.address.city}`,
  medicalHistory: "Regular checkup required",
  lastVisit: new Date(
    Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
  )
    .toISOString()
    .split("T")[0],
});

export const getPatients = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    return users.map(transformUserToPatient);
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw new Error("Failed to fetch patients from the server");
  }
};

export const addPatient = async (patient) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPatient = {
        ...patient,
        id: Date.now(),
      };
      resolve(newPatient);
    }, 1000);
  });
};

export const getPatientById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    return transformUserToPatient(user);
  } catch (error) {
    console.error("Error fetching patient details:", error);
    throw new Error("Failed to fetch patient details");
  }
};
