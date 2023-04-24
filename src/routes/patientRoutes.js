import express from "express";
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatientById,
  deletePatientById,
  grantAccess,
} from "../controllers/patientController.js";

const router = express.Router();

router.get("/", getAllPatients);
router.get("/:id", getPatientById);
router.post("/", createPatient);
router.put("/:id", updatePatientById);
router.delete("/:id", deletePatientById);
router.post("/grant-access", grantAccess);

export default router;
