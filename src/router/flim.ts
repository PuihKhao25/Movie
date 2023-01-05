import * as express from "express";
import flimController from "../controller/flimController";
import upload from "../middlewares/upload";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post(
  "/QuanLyPhim",
  upload.single("hinhAnh"),
  flimController.postFlim
);
router.get("/flim", flimController.getFlim);
router.get("/QuanLyPhim/LayThongTinPhim/:id", flimController.getDetailFlim);
router.delete(
  "/QuanLyPhim/XoaPhim/:id",
  verifyToken(["Quản Trị"]),
  flimController.deleteFlim
);
router.put(
  "/QuanLyPhim/CapNhatPhimUpload/:id",
  // verifyToken(["Quản Trị"]),
  upload.single("hinhAnh"),
  flimController.updateFlim
);
export default router;
