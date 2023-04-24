import express from "express";
import {
  getAllPharmacists,
  getPharmacistById,
  createPharmacist,
  updatePharmacistById,
  deletePharmacistById,
  prescribeMedicines,
} from "../controllers/pharmacistController.js";

const router = express.Router();

router.get("/", getAllPharmacists);
router.get("/:id", getPharmacistById);
router.post("/", createPharmacist);
router.put("/:id", updatePharmacistById);
router.delete("/:id", deletePharmacistById);
router.post("/prescribe", prescribeMedicines);

export default router;
