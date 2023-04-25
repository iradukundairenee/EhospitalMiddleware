import express from "express";
import {
  getAllPrescriptions,
  getPrescriptionById,
  createPrescription,
  downloadPrescription,
} from "../controllers/prescriptionController.js";
import Authorization from "../middleware/Authorization.js";

const router = express.Router();

router.get("/",getAllPrescriptions);
router.get("/:id", Authorization,getPrescriptionById);
router.post("/", Authorization,createPrescription);
router.get("/:id/download", downloadPrescription);

export default router;
