import axios from "../utils/axios";
import { catchAsync } from "../utils/catchAsync";

// Define prescription data
const prescriptions = [
  {
    id: 1,
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    medication: "Ibuprofen",
    dosage: "200mg",
    frequency: "3 times a day",
    startDate: "2022-01-01",
    endDate: "2022-02-01",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    doctorName: "Dr. Johnson",
    medication: "Acetaminophen",
    dosage: "500mg",
    frequency: "once a day",
    startDate: "2022-03-01",
    endDate: "2022-03-31",
  },
];

// Function to convert data to CSV format
const convertToCSV = (data) => {
  const headers = Object.keys(data[0]);
  const rows = data.map((item) => Object.values(item).join(","));
  return [headers.join(","), ...rows].join("\n");
};

// Controller function to get all prescriptions
export const getAllPrescriptions = catchAsync(async (req, res) => {
  let prescription = await axios(`/prescription`)
  res.status(200).json({
    status: "success",
    results:prescription.data.length,
    data: {
      prescription:prescription.data
    },
  });
  });


  export const createPrescription = catchAsync(async (req, res) => {
    const prescription = req.body;
      await axios.post(`prescription`, prescription)
        res.status(200).json({
          status: "success",
          message:"prescription created"
        });
      });
    
// Controller function to get a prescription by ID
export const getPrescriptionById = (req, res) => {
  const { id } = req.params;
  const prescription = prescriptions.find((p) => p.id === parseInt(id));
  if (!prescription) {
    return res.status(404).json({
      status: "fail",
      message: "Prescription not found",
    });
  }
  res.json(prescription);
};


// Controller function to download a prescription
export const downloadPrescription = catchAsync(async (req, res) => {
  const { id } = req.params;
  const prescription = prescriptions.find((p) => p.id === parseInt(id));
  if (!prescription) {
    return res.status(404).json({
      status: "fail",
      message: "Prescription not found",
    });
  }
  // Convert prescription to CSV format
  const csv = convertToCSV([prescription]);

  // Set headers for file download
  res.setHeader("Content-disposition", "attachment; filename=prescription.csv");
  res.set("Content-Type", "text/csv");

  // Send the CSV file as response
  res.status(200).send(csv);
});
