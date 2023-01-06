import * as express from "express";
import DatVeController from "../controller/datVeController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("/QuanLyDatVe/DatVe", verifyToken(["QuanTri","KhachHang"]), DatVeController.postDatVe);
router.get("", DatVeController.getDatVe);
router.get("/:id", DatVeController.getDetailDatVe);
router.put("/:id",verifyToken(["QuanTri"]), DatVeController.updateDatVe);
router.delete("",verifyToken(["QuanTri"]), DatVeController.deleteDatVe);

export default router;