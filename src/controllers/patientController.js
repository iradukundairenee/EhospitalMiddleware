import { catchAsync } from "../utils/catchAsync";


 function convertToCSV(data) {
  const csvData = [];
  const headers = Object.keys(data[0]);

  // Add headers to CSV data
  csvData.push(headers.join(","));

  // Add each row of data to CSV data
  for (let item of data) {
    let row = [];
    for (let key in item) {
      row.push(item[key]);
    }
    csvData.push(row.join(","));
  }

  // Combine all rows of data into a single CSV string
  return csvData.join("\n");
}

const patients = [
  {
    id: 1,
    name: "John Smith",
    age: 35,
    email: "john.smith@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown USA",
    condition: "High blood pressure",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 28,
    email: "jane.doe@example.com",
    phone: "987-654-3210",
    address: "456 Elm St, Anytown USA",
    condition: "Diabetes",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 50,
    email: "bob.johnson@example.com",
    phone: "555-123-4567",
    address: "789 Oak St, Anytown USA",
    condition: "Heart disease",
  },
];

export const getAllPatients = catchAsync(async (req, res) => {
  res.status(200).json(patients);
});

export const getPatientById = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const patient = patients.find((patient) => patient.id === id);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.status(200).json(patient);
});

export const createPatient = catchAsync(async (req, res) => {
  const newPatient = req.body;
  newPatient.id = patients.length + 1;
  patients.push(newPatient);

  res.status(201).json(newPatient);
});

export const updatePatientById = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const updatedPatient = req.body;

  let index = patients.findIndex((patient) => patient.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Patient not found" });
  }

  patients[index] = { ...patients[index], ...updatedPatient };
  res.status(200).json(patients[index]);
});

export const deletePatientById = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  let index = patients.findIndex((patient) => patient.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Patient not found" });
  }

  patients.splice(index, 1);
  res.status(204).json();
});

export const grantAccess = catchAsync(async (req, res) => {
  // TODO: Implement function
});
