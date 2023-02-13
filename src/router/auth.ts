import * as express from "express";
import authController from "../controller/authController";
import { verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("/QuanLyNguoiDung/DangNhap" ,authController.PostLogin);
router.post("/QuanLyNguoiDung/DangKy", authController.postRegister);
router.post("/QuanLyNguoiDung/ThemNguoiDung",verifyToken(["QuanTri"]), authController.postAddUser);
router.get("/QuanLyNguoiDung/LayDanhSachNguoiDung",authController.getUser);
router.get("/QuanLyNguoiDung/ThongTinTaiKhoan/:id", authController.getUserDetail);
router.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung/:id",verifyToken(["QuanTri"]), authController.updateUser);
router.delete("/QuanLyNguoiDung/XoaNguoiDung/:id", verifyToken(["QuanTri"]),authController.deleteUser);
router.get("/QuanLyNguoiDung/LichSu", authController.getHistory)

export default router;
