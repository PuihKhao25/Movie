import * as express from "express";
import BannerController from "../controller/bannerController";
import upload from '../middlewares/upload';
import { verifyToken } from "../middlewares/verifyToken";

const router = express.Router();
    
router.post("", upload.single("hinh_anh"), BannerController.postBanner);
router.get("/QuanLyPhim/LayDanhSachBanner",BannerController.getAllBanner);
router.delete("/:id",verifyToken(["QuanTri"]),  BannerController.deleteBanner);
router.put("/:id",verifyToken(["Quản Trị"]),upload.single("hinh_anh"), BannerController.updateBanner);
export default router;