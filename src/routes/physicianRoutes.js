import express from "express";
import {
  getAllPhysicians,
  getPhysicianById,
  createPhysician,
  updatePhysicianById,
  deletePhysicianById,
  diagnoseDisease,
} from "../controllers/physicianController.js";

const router = express.Router();

router.get("/", getAllPhysicians);
router.get("/:id", getPhysicianById);
router.post("/", createPhysician);
router.put("/:id", updatePhysicianById);
router.delete("/:id", deletePhysicianById);
router.post("/diagnose", diagnoseDisease);

export default router;
