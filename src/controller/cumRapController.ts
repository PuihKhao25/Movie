import { Request, Response } from "express";
import { CreateCumRap, ListCumRap, DetailCumrap, DeleteCumRap, UpdateCumrap } from '../model/cumrap';
import { ResError } from "../constant";
import cloudinary from "../middlewares/cloudinary";
import {
    SystemError,
    ResponseFailed,
    ResponseSuccess,
} from "../constant/response";

class CumRapController {
    postCumRap = async (req: Request, res: Response) => {
        let basic_info = req.body;
        try {
            await CreateCumRap(basic_info);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    getCumRap = async (req: Request, res: Response) => {
        try {
            let cumrap = await ListCumRap();
            ResponseSuccess(res,cumrap)
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    getDetailCumRap = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            let cumrap = await DetailCumrap(id);
            ResponseSuccess(res,cumrap)
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    updateCumRap = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        let basic_info = req.body;
        try {
            await UpdateCumrap(basic_info,id)
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    deleteCumRap = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            await DeleteCumRap(id);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
}

export default new CumRapController;