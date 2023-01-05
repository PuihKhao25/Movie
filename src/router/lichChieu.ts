import * as express from "express";
import LichChieuController from "../controller/lichChieuController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("/QuanLyDatVe/TaoLichChieu",LichChieuController.postLichChieu);
router.get("", LichChieuController.getLichChieu);
router.get("/:id", LichChieuController.getDetailLichChieu);
router.put("/:id",verifyToken(["Quản Trị"]), LichChieuController.updateLichChieu);
router.delete("/:id",verifyToken(["Quản Trị"]), LichChieuController.deleteLichChieu);

export default router;