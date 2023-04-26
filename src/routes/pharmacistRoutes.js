import express from "express";
import {
  getAllPharmacists,
  getPharmacistById,
  updatePharmacistById,
  deletePharmacistById,
  prescribeMedicines,
  grantAccessToPharmacist,
  getAllGrantedPharmacist
} from "../controllers/pharmacistController.js";
import Authorization from "../middleware/Authorization.js";

const router = express.Router();

router.get("/",Authorization,getAllPharmacists);
router.get("/granted", Authorization, getAllGrantedPharmacist);
router.post("/", Authorization ,grantAccessToPharmacist);
router.put("/:id", Authorization ,updatePharmacistById);
router.delete("/:id", Authorization ,deletePharmacistById);
router.post("/prescribe", Authorization,prescribeMedicines);

export default router;
