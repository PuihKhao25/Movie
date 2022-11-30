import * as express from "express";
import flimController from "../controller/flimController";
import upload from '../middlewares/upload'

const router = express.Router();

router.post("/flim", upload.single("hinh_anh"),flimController.postFlim);
router.get("/flim",flimController.getFlim);
router.get("/flim/:id",flimController.getDetailFlim);
router.delete("/flim/:id",flimController.deleteFlim);
router.put('/flim/:id',upload.single("hinh_anh"),flimController.updateFlim)
export default router;
