import axios from "../utils/axios";
import { catchAsync } from "../utils/catchAsync";


export const getAllPharmacists = catchAsync(async (req, res) => {

  let decodedToken=req.decodedToken;
  if(decodedToken.user.role !="patient"){

    return res.status(401).json({
      error:"you are not allowed"
    })
  }
  let pharmacist =await axios(`pharmacist`)
  res.status(200).json({
    status: "success",
    data: {
      pharmacist,
    },
  });
});


export const getAllGrantedPharmacist = catchAsync(async (req, res) => {


  let pharmacist=await axios(`pharmacist/granted`)

    res.status(200).json({
      status: "success",
      results: pharmacist.data.length,
      data: {
        pharmacist:pharmacist.data
      },
    });
  });

export const getPharmacistById = catchAsync(async (req, res) => {
  const pharmacist = pharmacists.find((p) => p.id === parseInt(req.params.id));

  if (!pharmacist) {
    return res.status(404).json({
      status: "fail",
      message: "Pharmacist not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      pharmacist,
    },
  });
});

export const grantAccessToPharmacist = catchAsync(async (req, res) => {
  const username = req.body;
  let decodedToken=req.decodedToken;
  if(decodedToken.user.role !="patient"){

    return res.status(401).json({
      error:"you are not allowed"
    })
  }

  await axios.post(`pharmacist`,username)
    res.status(200).json({
      status: "success",
      message:"access granted"
    });
  });
export const updatePharmacistById = catchAsync(async (req, res) => {
  const pharmacist = pharmacists.find((p) => p.id === parseInt(req.params.id));

  if (!pharmacist) {
    return res.status(404).json({
      status: "fail",
      message: "Pharmacist not found",
    });
  }

  pharmacist.name = req.body.name || pharmacist.name;
  pharmacist.email = req.body.email || pharmacist.email;
  pharmacist.phone = req.body.phone || pharmacist.phone;
  pharmacist.address = req.body.address || pharmacist.address;
  pharmacist.qualifications =
    req.body.qualifications || pharmacist.qualifications;
  pharmacist.experience = req.body.experience || pharmacist.experience;

  res.status(200).json({
    status: "success",
    data: {
      pharmacist,
    },
  });
});

export const deletePharmacistById = catchAsync(async (req, res) => {
  const pharmacistIndex = pharmacists.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (pharmacistIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Pharmacist not found",
    });
  }

  pharmacists.splice(pharmacistIndex, 1);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
export const prescribeMedicines = catchAsync(async (req, res) => {
  const patientId = req.params.id;
  const patient = patients.find((p) => p.id === parseInt(patientId));

  if (!patient) {
    return res.status(404).json({
      status: "fail",
      message: "Patient not found",
    });
  }

  const { medicines } = req.body;

  // Perform validation on the medicines before prescribing

  const prescription = {
    id: prescriptions.length + 1,
    patientId,
    medicines,
    datePrescribed: new Date(),
  };

  prescriptions.push(prescription);

  res.status(201).json({
    status: "success",
    data: {
      prescription,
    },
  });
});

