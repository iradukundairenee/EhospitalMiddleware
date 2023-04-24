"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePharmacistById = exports.prescribeMedicines = exports.getPharmacistById = exports.getAllPharmacists = exports.deletePharmacistById = exports.createPharmacist = void 0;
var _catchAsync = require("../utils/catchAsync");
const pharmacists = [{
  id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
  phone: "1234567890",
  address: "123 Main St, Anytown USA",
  qualifications: ["B.Pharm", "M.Pharm"],
  experience: "5 years"
}, {
  id: 2,
  name: "Jane Smith",
  email: "janesmith@gmail.com",
  phone: "0987654321",
  address: "456 Oak St, Anytown USA",
  qualifications: ["B.Pharm"],
  experience: "2 years"
}, {
  id: 3,
  name: "Bob Johnson",
  email: "bobjohnson@gmail.com",
  phone: "5555555555",
  address: "789 Elm St, Anytown USA",
  qualifications: ["B.Pharm", "Pharm.D"],
  experience: "10 years"
}];
const getAllPharmacists = (0, _catchAsync.catchAsync)(async (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      pharmacists
    }
  });
});
exports.getAllPharmacists = getAllPharmacists;
const getPharmacistById = (0, _catchAsync.catchAsync)(async (req, res) => {
  const pharmacist = pharmacists.find(p => p.id === parseInt(req.params.id));
  if (!pharmacist) {
    return res.status(404).json({
      status: "fail",
      message: "Pharmacist not found"
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      pharmacist
    }
  });
});
exports.getPharmacistById = getPharmacistById;
const createPharmacist = (0, _catchAsync.catchAsync)(async (req, res) => {
  const newPharmacist = {
    id: pharmacists.length + 1,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    qualifications: req.body.qualifications,
    experience: req.body.experience
  };
  pharmacists.push(newPharmacist);
  res.status(201).json({
    status: "success",
    data: {
      pharmacist: newPharmacist
    }
  });
});
exports.createPharmacist = createPharmacist;
const updatePharmacistById = (0, _catchAsync.catchAsync)(async (req, res) => {
  const pharmacist = pharmacists.find(p => p.id === parseInt(req.params.id));
  if (!pharmacist) {
    return res.status(404).json({
      status: "fail",
      message: "Pharmacist not found"
    });
  }
  pharmacist.name = req.body.name || pharmacist.name;
  pharmacist.email = req.body.email || pharmacist.email;
  pharmacist.phone = req.body.phone || pharmacist.phone;
  pharmacist.address = req.body.address || pharmacist.address;
  pharmacist.qualifications = req.body.qualifications || pharmacist.qualifications;
  pharmacist.experience = req.body.experience || pharmacist.experience;
  res.status(200).json({
    status: "success",
    data: {
      pharmacist
    }
  });
});
exports.updatePharmacistById = updatePharmacistById;
const deletePharmacistById = (0, _catchAsync.catchAsync)(async (req, res) => {
  const pharmacistIndex = pharmacists.findIndex(p => p.id === parseInt(req.params.id));
  if (pharmacistIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Pharmacist not found"
    });
  }
  pharmacists.splice(pharmacistIndex, 1);
  res.status(204).json({
    status: "success",
    data: null
  });
});
exports.deletePharmacistById = deletePharmacistById;
const prescribeMedicines = (0, _catchAsync.catchAsync)(async (req, res) => {
  const patientId = req.params.id;
  const patient = patients.find(p => p.id === parseInt(patientId));
  if (!patient) {
    return res.status(404).json({
      status: "fail",
      message: "Patient not found"
    });
  }
  const {
    medicines
  } = req.body;

  // Perform validation on the medicines before prescribing

  const prescription = {
    id: prescriptions.length + 1,
    patientId,
    medicines,
    datePrescribed: new Date()
  };
  prescriptions.push(prescription);
  res.status(201).json({
    status: "success",
    data: {
      prescription
    }
  });
});
exports.prescribeMedicines = prescribeMedicines;
//# sourceMappingURL=pharmacistController.js.map