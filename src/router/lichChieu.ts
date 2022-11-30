import * as express from "express";
import LichChieuController from "../controller/lichChieuController";

const router = express.Router();

router.post("", LichChieuController.postLichChieu);
router.get("", LichChieuController.getLichChieu);
router.get("/:id", LichChieuController.getDetailLichChieu);
router.put("/:id", LichChieuController.updateLichChieu);
router.delete("/:id", LichChieuController.deleteLichChieu);

export default router;