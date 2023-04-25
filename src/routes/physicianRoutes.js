import express from "express";
import {
  getAllPhysicians,
  getPhysicianById,
  updatePhysicianById,
  deletePhysicianById,
  diagnoseDisease,
  grantAccessToPhysician,
  getAllGrantedPhysician
} from "../controllers/physicianController.js";
import Authorization from "../middleware/Authorization.js";

const router = express.Router();

router.get("/", Authorization, getAllPhysicians);
router.get("/granted", Authorization, getAllGrantedPhysician);
router.post("/", Authorization, grantAccessToPhysician);
router.put("/:id", Authorization, updatePhysicianById);
router.delete("/:id", Authorization, deletePhysicianById);
router.post("/diagnose",Authorization, diagnoseDisease);

export default router;
