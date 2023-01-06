import * as express from "express";
import CinemaSystemController from "../controller/CinemaSTController";
import upload from '../middlewares/upload';
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("",upload.single("hinh_anh"), CinemaSystemController.postCinemaSytem);
router.get("", verifyToken(["Quản Trị"]),CinemaSystemController.getCinemaSystem);
router.get("/:id", verifyToken(["Quản Trị"]),CinemaSystemController.getDetailCinimaSystem);
router.put("/:id",verifyToken(["Quản Trị"]), upload.single("hinh_anh"), CinemaSystemController.updateCinimaSystem);
router.delete("/:id",verifyToken(["Quản Trị"]), CinemaSystemController.deleteCinimaSystem);

export default router;