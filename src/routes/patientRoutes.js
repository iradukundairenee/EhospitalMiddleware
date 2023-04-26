import express from "express";
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatientById,
  deletePatientById,
  grantAccess,
} from "../controllers/patientController.js";
import Authorization from "../middleware/Authorization.js";

const router = express.Router();

router.get("/", Authorization,getAllPatients);
router.get("/:id", Authorization,getPatientById);
router.post("/", Authorization,createPatient);
router.put("/:id", Authorization,updatePatientById);
router.delete("/:id", Authorization,deletePatientById);
router.post("/grant-access", Authorization,grantAccess);

export default router;
