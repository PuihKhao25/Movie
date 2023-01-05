import * as express from "express";
import authController from "../controller/authController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("/QuanLyNguoiDung/DangNhap",authController.PostLogin)
router.post("/QuanLyNguoiDung/DangKy", authController.postRegister);
router.post("/QuanLyNguoiDung/ThemNguoiDung", authController.postAddUser)
router.get("/QuanLyNguoiDung/LayDanhSachNguoiDung",authController.getUser);
router.get("/QuanLyNguoiDung/ThongTinTaiKhoan/:id",authController.getUserDetail);
router.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung/:id", authController.updateUser)
router.delete("/QuanLyNguoiDung/XoaNguoiDung/:id",authController.deleteUser)
export default router;
