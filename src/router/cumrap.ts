import * as express from "express";
import CumRapController from "../controller/cumRapController";

const router = express.Router();

router.post("", CumRapController.postCumRap);
router.get("", CumRapController.getCumRap);
router.get("/:id", CumRapController.getDetailCumRap);
router.put("/:id", CumRapController.updateCumRap);
router.delete("/:id", CumRapController.deleteCumRap);

export default router;