import * as express from "express";
import BannerController from "../controller/bannerController";
import upload from '../middlewares/upload';

const router = express.Router();

router.post("", upload.single("hinh_anh"), BannerController.postBanner);
router.get("", BannerController.getAllBanner);
router.delete("/:id", BannerController.deleteBanner);
router.put("/:id",upload.single("hinh_anh"), BannerController.updateBanner);
export default router;