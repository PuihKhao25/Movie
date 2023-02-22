import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import {
  CreateUser,
  CheckExistUser,
  ListUser,
  GetUserDetail,
  DeleteUser,
  UpdateUser,
  findByEmail,
  AddUser,
  ListHistory,
} from "../model/user";
import { ResError } from "../constant";
import { EmailRegExp } from "../modules/strutil";
import {
  SystemError,
  ResponseFailed,
  ResponseSuccess,
} from "../constant/response";
import bcrypt from "bcrypt";

class AuthController {
  PostLogin = async (req: Request, res: Response) => {
    const email = req?.body?.email;
    const mat_khau = req?.body?.matKhau;
    try {
      const auth: any = await findByEmail(email);

      if (!auth) return ResponseFailed(res, ResError.USERNAME_NOT_EXIST);
      const passwordValid = await bcrypt.compare(mat_khau, auth.mat_khau);
      if (!passwordValid) return ResponseFailed(res, ResError.PASS_NOT_EXIST);

      const accessToken = jwt.sign(
        {
          tai_khoan: auth.tai_khoan,
          ho_ten: auth.ho_ten,
          loai_nguoi_dung: auth.loai_nguoi_dung,
          hoTen: auth.ho_ten,
          email: auth.email,
          soDt: auth.so_dt,
        },
        process.env.TOKEN_SECRET as Secret,
        { expiresIn: process.env.TOKEN_EXP }
      );
      const data = {
        taiKhoan: auth.tai_khoan,
        maLoaiNguoiDung: auth.loai_nguoi_dung,
        hoTen: auth.ho_ten,
        email: auth.email,
        soDt: auth.so_dt,
        accessToken: accessToken,
      };

      ResponseSuccess(res, data);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  postRegister = async (req: Request, res: Response) => {
    let basic_info = {
      ho_ten: req.body.hoTen,
      email: req.body.email,
      so_dt: req.body.soDt,
      mat_khau: req.body.matKhau,
    };
    if (!basic_info.ho_ten || basic_info.ho_ten.length < 1)
      return ResponseFailed(res, ResError.USERNAME_INVALID);
    if (!EmailRegExp(basic_info.email))
      return ResponseFailed(res, ResError.EMAIL_INVALID);
    try {
      const exist: any = await CheckExistUser(
        basic_info.email,
        basic_info.ho_ten
      );
      if (exist.length !== 0)
        return ResponseFailed(res, ResError.ACCOUNT_EXISTED);
      const salt = await bcrypt.genSalt(10);
      basic_info.mat_khau = await bcrypt.hash(basic_info.mat_khau, salt);

      await CreateUser(basic_info);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getUser = async (req: Request, res: Response) => {
    try {
      let users = await ListUser();
      ResponseSuccess(res, users);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getUserDetail = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    try {
      let userDetail = await GetUserDetail(id);
      if (!userDetail) return ResponseFailed(res, ResError.NOT_FOUND_DATA);
      ResponseSuccess(res, userDetail);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  deleteUser = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    try {
      await DeleteUser(id);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  updateUser = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let basic_info = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      basic_info.mat_khau = await bcrypt.hash(basic_info.mat_khau, salt);
      await UpdateUser(basic_info, id);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  postAddUser = async (req: Request, res: Response) => {
    let basic_info = {
      ho_ten: req.body.hoTen,
      email: req.body.email,
      so_dt: req.body.soDt,
      mat_khau: req.body.matKhau,
      loai_nguoi_dung: req.body.maLoaiNguoiDung,
    };
  
    if (!basic_info.ho_ten || basic_info.ho_ten.length < 1)
      return ResponseFailed(res, ResError.USERNAME_INVALID);
    if (!EmailRegExp(basic_info.email))
      return ResponseFailed(res, ResError.EMAIL_INVALID);
    try {
      const exist: any = await CheckExistUser(
        basic_info.email,
        basic_info.ho_ten
      );
      if (exist.length !== 0)
        return ResponseFailed(res, ResError.ACCOUNT_EXISTED);
      const salt = await bcrypt.genSalt(10);
      basic_info.mat_khau = await bcrypt.hash(basic_info.mat_khau, salt);

      // await AddUser(basic_info);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getHistory = async (req: Request, res: Response) => {
    const tai_khoan = Number(req.query.taiKhoan);
    try {
      const listHistory = await ListHistory(tai_khoan);
      ResponseSuccess(res, listHistory);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
}

export default new AuthController();
