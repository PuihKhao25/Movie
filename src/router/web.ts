import * as express from "express";
import webController from "../controller/webController";
import WebController from "../controller/webController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.get("/LayThongTinLichChieuPhim", WebController.getInfoLichChieuPhim);
router.get("/QuanLyDatVe/LayDanhSachPhongVe", WebController.getListPhongVe);
router.get("/layDanhSachBanner", WebController.getListBanner);
router.get("/QuanLyPhim/LayDanhSachPhim", WebController.getListPhim);
router.get("/layDanhSachPhim/:id", WebController.getDetailPhim);
router.get("/layThongTinHeThongRap",WebController.getHeThongRap);
router.get("/layThongTinCumRapTheoHeThong",WebController.getCumrap);
router.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", WebController.getInfomationCalendarSystem);
router.get("/QuanLyRap/LayThongTinLichChieu", WebController.getCalendarSystem);
router.get("/QuanLyRap/layGheTheoRap", WebController.getChairSystem);
router.get("/QuanLyDatVe/LayVeDaDat", webController.getListBookedTicks);
router.get("/QuanLyDatVe/LayPhimTheoLichChieu", webController.getDetailFlimBookTicket);
router.get("/lichSuPhim",WebController.getHistoryFlim);
router.get("/ngayGio",WebController.getTime);
router.get('/QuanLyDoanhThu/lichChieu',WebController.revenueByShowtimes);
router.get('/QuanLyDoanhThu/phim',WebController.revenueByFilm);
router.get('/QuanLyDoanhThu/rap',WebController.revenueByTheater);




export default router;
