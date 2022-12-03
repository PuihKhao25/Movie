import * as express from "express";
import WebController from "../controller/webController";

const router = express.Router();

router.get("/LayThongTinLichChieuPhim", WebController.getInfoLichChieuPhim);
router.get("/LayDanhSachPhongVe", WebController.getListPhongVe);

export default router;
