import { Request, Response } from "express";
import { CreateUser, CheckExistUser, ListUser, GetUserDetail, DeleteUser, UpdateUser } from '../model/user';
import { ResError } from "../constant";
import { EmailRegExp } from "../modules/strutil";
import {
    SystemError,
    ResponseFailed,
    ResponseSuccess,
} from "../constant/response";
import bcrypt from 'bcrypt';

class AuthController {
    postRegister = async (req: Request, res: Response) => {
        let basic_info = req.body;
        if (!basic_info.ho_ten || basic_info.ho_ten.length < 4) return ResponseFailed(res, ResError.USERNAME_INVALID);
        if (!EmailRegExp(basic_info.email)) return ResponseFailed(res, ResError.EMAIL_INVALID);
        try {
            const exist: any = await CheckExistUser(basic_info.email, basic_info.ho_ten);
            if (exist.length !== 0) return ResponseFailed(res, ResError.ACCOUNT_EXISTED);
            const salt = await bcrypt.genSalt(10);
            basic_info.mat_khau = await bcrypt.hash(basic_info.mat_khau, salt);

            await CreateUser(basic_info)
            ResponseSuccess(res)
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    getUser = async (req: Request, res: Response) => {
        try {
            let users = await ListUser();
            ResponseSuccess(res, users)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    getUserDetail = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            let userDetail = await GetUserDetail(id);
            if (!userDetail) return ResponseFailed(res, ResError.NOT_FOUND_DATA)
            ResponseSuccess(res, userDetail)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    deleteUser = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            await DeleteUser(id);
            ResponseSuccess(res)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    updateUser = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        let basic_info = req.body;
        try {
            await UpdateUser(basic_info,id);
            ResponseSuccess(res)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
}

export default new AuthController;