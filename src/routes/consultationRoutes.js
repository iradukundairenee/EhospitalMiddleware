import express from "express";
import {
    getAllConsultation,
    createConsultation
} from "../controllers/consultationController";
import Authorization from "../middleware/Authorization.js";

const router = express.Router();

router.get("/",Authorization,getAllConsultation);
router.post("/", Authorization,createConsultation);


export default router;
