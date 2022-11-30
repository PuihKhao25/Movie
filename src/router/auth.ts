import * as express from "express";
import authController from "../controller/authController";
const router = express.Router();

router.post("/register", authController.postRegister);
router.get("",authController.getUser);
router.get("/:id",authController.getUserDetail);
router.delete("/:id",authController.deleteUser)
router.put('/:id',authController.updateUser)
export default router;
