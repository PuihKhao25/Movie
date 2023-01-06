import * as express from "express";
import LichChieuController from "../controller/lichChieuController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("/QuanLyDatVe/TaoLichChieu",verifyToken(["QuanTri"]),LichChieuController.postLichChieu);
router.get("", LichChieuController.getLichChieu);
router.get("/:id", LichChieuController.getDetailLichChieu);
router.put("/:id",  verifyToken(["QuanTri"]), LichChieuController.updateLichChieu);
router.delete("/:id",verifyToken(["QuanTri"]), LichChieuController.deleteLichChieu);

export default router;