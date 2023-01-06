import * as express from "express";
import ChairController from "../controller/ChairController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("",ChairController.postChair);
router.get("",ChairController.getChair);
router.get("/:id",verifyToken(["Quản Trị"]),ChairController.getDetailChair);
router.delete("/:id",verifyToken(["Quản Trị"]),ChairController.deleteChair);
router.put('/:id',verifyToken(["Quản Trị"]),ChairController.updateChair)
export default router;