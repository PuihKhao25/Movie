import * as express from "express";
import RapPhimController from "../controller/rapPhimController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("", verifyToken(["QuanTri"]), RapPhimController.postRapPhim);
router.get("", RapPhimController.getRapPhim);
router.get("/:id", RapPhimController.getDetailRapPhim);
router.put("/:id", verifyToken(["QuanTri"]), RapPhimController.updateRapPhim);
router.delete("/:id", verifyToken(["QuanTri"]), RapPhimController.deleteRapPhim);

export default router;