import express from "express";
import {
  getAllPrescriptions,
  getPrescriptionById,
  createPrescription,
  downloadPrescription,
} from "../controllers/prescriptionController.js";

const router = express.Router();

router.get("/", getAllPrescriptions);
router.get("/:id", getPrescriptionById);
router.post("/", createPrescription);
router.get("/:id/download", downloadPrescription);

export default router;
