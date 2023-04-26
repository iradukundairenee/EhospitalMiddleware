import express from "express";
import {
    getAllmedecines,
    createlMedecines 
} from "../controllers/medecineController";
import Authorization from "../middleware/Authorization.js";

const router = express.Router();

router.get("/",Authorization,getAllmedecines);
router.post("/", Authorization,createlMedecines);


export default router;
