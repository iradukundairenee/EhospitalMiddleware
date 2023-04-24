"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePhysicianById = exports.getPhysicianById = exports.getAllPhysicians = exports.diagnoseDisease = exports.deletePhysicianById = exports.createPhysician = void 0;
var _catchAsync = require("../utils/catchAsync");
let physicians = [{
  id: 1,
  name: "John Doe",
  specialty: "Cardiology"
}, {
  id: 2,
  name: "Jane Smith",
  specialty: "Neurology"
}];
const getAllPhysicians = (0, _catchAsync.catchAsync)(async (req, res) => {
  res.status(200).json({
    status: "success",
    results: physicians.length,
    data: {
      physicians
    }
  });
});
exports.getAllPhysicians = getAllPhysicians;
const getPhysicianById = (0, _catchAsync.catchAsync)(async (req, res) => {
  const physician = physicians.find(p => p.id === parseInt(req.params.id));
  if (!physician) {
    return res.status(404).json({
      status: "fail",
      message: "Physician not found"
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      physician
    }
  });
});
exports.getPhysicianById = getPhysicianById;
const createPhysician = (0, _catchAsync.catchAsync)(async (req, res) => {
  const newPhysician = {
    id: physicians.length + 1,
    name: req.body.name,
    specialty: req.body.specialty
  };
  physicians.push(newPhysician);
  res.status(201).json({
    status: "success",
    data: {
      physician: newPhysician
    }
  });
});
exports.createPhysician = createPhysician;
const updatePhysicianById = (0, _catchAsync.catchAsync)(async (req, res) => {
  const physician = physicians.find(p => p.id === parseInt(req.params.id));
  if (!physician) {
    return res.status(404).json({
      status: "fail",
      message: "Physician not found"
    });
  }
  physician.name = req.body.name || physician.name;
  physician.specialty = req.body.specialty || physician.specialty;
  res.status(200).json({
    status: "success",
    data: {
      physician
    }
  });
});
exports.updatePhysicianById = updatePhysicianById;
const deletePhysicianById = (0, _catchAsync.catchAsync)(async (req, res) => {
  const physicianIndex = physicians.findIndex(p => p.id === parseInt(req.params.id));
  if (physicianIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Physician not found"
    });
  }
  physicians.splice(physicianIndex, 1);
  res.status(204).json({
    status: "success",
    data: null
  });
});
exports.deletePhysicianById = deletePhysicianById;
const diagnoseDisease = (0, _catchAsync.catchAsync)(async (req, res) => {
  // TODO: Implement function
  const diagnosis = "Common cold";
  res.status(200).json({
    status: "success",
    data: {
      diagnosis
    }
  });
});
exports.diagnoseDisease = diagnoseDisease;
//# sourceMappingURL=physicianController.js.map