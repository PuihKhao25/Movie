import * as express from "express";
import CinemaSystemController from "../controller/CinemaSTController";
import upload from '../middlewares/upload';

const router = express.Router();

router.post("", upload.single("hinh_anh"), CinemaSystemController.postCinemaSytem);
router.get("", CinemaSystemController.getCinemaSystem);
router.get("/:id", CinemaSystemController.getDetailCinimaSystem);
router.put("/:id", upload.single("hinh_anh"), CinemaSystemController.updateCinimaSystem);
router.delete("/:id", CinemaSystemController.deleteCinimaSystem);

export default router;