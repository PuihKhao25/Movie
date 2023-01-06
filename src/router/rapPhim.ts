import * as express from "express";
import RapPhimController from "../controller/rapPhimController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("", RapPhimController.postRapPhim);
router.get("", RapPhimController.getRapPhim);
router.get("/:id", RapPhimController.getDetailRapPhim);
router.put("/:id",verifyToken(["Quản Trị"]), RapPhimController.updateRapPhim);
router.delete("/:id",verifyToken(["Quản Trị"]), RapPhimController.deleteRapPhim);

export default router;