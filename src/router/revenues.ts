import * as express from "express";
import revenueController from "../controller/revenueController";
const router = express.Router();

router.get("/tong",revenueController.listRevenue);

export default router;