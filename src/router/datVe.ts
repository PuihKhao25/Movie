import * as express from "express";
import DatVeController from "../controller/datVeController";

const router = express.Router();

router.post("", DatVeController.postDatVe);
router.get("", DatVeController.getDatVe);
router.get("/:id", DatVeController.getDetailDatVe);
router.put("/:id", DatVeController.updateDatVe);
router.delete("", DatVeController.deleteDatVe);

export default router;