import { catchAsync } from "../utils/catchAsync";

let physicians = [
  {
    id: 1,
    name: "John Doe",
    specialty: "Cardiology",
  },
  {
    id: 2,
    name: "Jane Smith",
    specialty: "Neurology",
  },
];

export const getAllPhysicians = catchAsync(async (req, res) => {
  res.status(200).json({
    status: "success",
    results: physicians.length,
    data: {
      physicians,
    },
  });
});

export const getPhysicianById = catchAsync(async (req, res) => {
  const physician = physicians.find((p) => p.id === parseInt(req.params.id));
  if (!physician) {
    return res.status(404).json({
      status: "fail",
      message: "Physician not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      physician,
    },
  });
});

export const createPhysician = catchAsync(async (req, res) => {
  const newPhysician = {
    id: physicians.length + 1,
    name: req.body.name,
    specialty: req.body.specialty,
  };
  physicians.push(newPhysician);

  res.status(201).json({
    status: "success",
    data: {
      physician: newPhysician,
    },
  });
});

export const updatePhysicianById = catchAsync(async (req, res) => {
  const physician = physicians.find((p) => p.id === parseInt(req.params.id));
  if (!physician) {
    return res.status(404).json({
      status: "fail",
      message: "Physician not found",
    });
  }

  physician.name = req.body.name || physician.name;
  physician.specialty = req.body.specialty || physician.specialty;

  res.status(200).json({
    status: "success",
    data: {
      physician,
    },
  });
});

export const deletePhysicianById = catchAsync(async (req, res) => {
  const physicianIndex = physicians.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (physicianIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Physician not found",
    });
  }

  physicians.splice(physicianIndex, 1);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

export const diagnoseDisease = catchAsync(async (req, res) => {
  // TODO: Implement function
  const diagnosis = "Common cold";
  res.status(200).json({
    status: "success",
    data: {
      diagnosis,
    },
  });
});
