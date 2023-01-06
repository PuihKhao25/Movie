import * as express from "express";
import CinemaSystemController from "../controller/CinemaSTController";
import upload from '../middlewares/upload';
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("", verifyToken(["QuanTri"]),upload.single("hinh_anh"), CinemaSystemController.postCinemaSytem);
router.get("", CinemaSystemController.getCinemaSystem);
router.get("/:id", CinemaSystemController.getDetailCinimaSystem);
router.put("/:id", verifyToken(["QuanTri"]), upload.single("hinh_anh"), CinemaSystemController.updateCinimaSystem);
router.delete("/:id", verifyToken(["QuanTri"]), CinemaSystemController.deleteCinimaSystem);

export default router;