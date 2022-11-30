import * as express from "express";
import RapPhimController from "../controller/rapPhimController";

const router = express.Router();

router.post("", RapPhimController.postRapPhim);
router.get("", RapPhimController.getRapPhim);
router.get("/:id", RapPhimController.getDetailRapPhim);
router.put("/:id", RapPhimController.updateRapPhim);
router.delete("/:id", RapPhimController.deleteRapPhim);

export default router;