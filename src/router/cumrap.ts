import * as express from "express";
import CumRapController from "../controller/cumRapController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("", CumRapController.postCumRap);
router.get("", CumRapController.getCumRap);
router.get("/:id", CumRapController.getDetailCumRap);
router.put("/:id", verifyToken(["QuanTri"]), CumRapController.updateCumRap);
router.delete("/:id", verifyToken(["QuanTri"]), CumRapController.deleteCumRap);

export default router;
