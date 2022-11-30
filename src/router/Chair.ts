import * as express from "express";
import ChairController from "../controller/ChairController";

const router = express.Router();

router.post("",ChairController.postChair);
router.get("",ChairController.getChair);
router.get("/:id",ChairController.getDetailChair);
router.delete("/:id",ChairController.deleteChair);
router.put('/:id',ChairController.updateChair)
export default router;