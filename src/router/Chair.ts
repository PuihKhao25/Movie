import * as express from "express";
import ChairController from "../controller/ChairController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("",ChairController.postChair);
router.get("",ChairController.getChair);
router.get("/:id",ChairController.getDetailChair);
router.delete("/:id", verifyToken(["QuanTri"]),ChairController.deleteChair);
router.put('/:id', verifyToken(["QuanTri"]),ChairController.updateChair)
export default router;