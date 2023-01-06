import * as express from "express";
import CumRapController from "../controller/cumRapController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("", CumRapController.postCumRap);
router.get("", CumRapController.getCumRap);
router.get("/:id", CumRapController.getDetailCumRap);
router.put("/:id", verifyToken(["Quản Trị"]), CumRapController.updateCumRap);
router.delete("/:id", verifyToken(["Quản Trị"]), CumRapController.deleteCumRap);

export default router;
