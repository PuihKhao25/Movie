import * as express from "express";
import WebController from "../controller/webController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.get("/LayThongTinLichChieuPhim", WebController.getInfoLichChieuPhim);
router.get("/QuanLyDatVe/LayDanhSachPhongVe", verifyToken(["QuanTri"]), WebController.getListPhongVe);
router.get("/layDanhSachBanner", WebController.getListBanner);
router.get("/QuanLyPhim/LayDanhSachPhim", WebController.getListPhim);
router.get("/layDanhSachPhim/:id", WebController.getDetailPhim);
router.get("/layThongTinHeThongRap",WebController.getHeThongRap);
router.get("/layThongTinCumRapTheoHeThong",WebController.getCumrap);
router.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", WebController.getInfomationCalendarSystem);
router.get("/QuanLyRap/LayThongTinLichChieu", WebController.getCalendarSystem);
router.get("/QuanLyRap/layGheTheoRap", WebController.getChairSystem);



export default router;
