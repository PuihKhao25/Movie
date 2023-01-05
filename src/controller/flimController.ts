import { Request, Response } from "express";
import { CreateFlim, ListFlim, ListDetail, DeleteFlim, getURL,UpdateFLim } from '../model/flim';
import { ResError } from "../constant";
import cloudinary from "../middlewares/cloudinary";
import {
    SystemError,
    ResponseFailed,
    ResponseSuccess,
} from "../constant/response";

class FlimController {
    postFlim = async (req: Request, res: Response) => {
        const basic_info = req.body;
        try {
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                basic_info.hinhAnh = result.url;
            }
            await CreateFlim(basic_info)
            ResponseSuccess(res)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    getFlim = async (req: Request, res: Response) => {
        try {
            let listFlim = await ListFlim();
            ResponseSuccess(res, listFlim);
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    getDetailFlim = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            let flimDetail = await ListDetail(id);
            if (!flimDetail) return ResponseFailed(res, ResError.NOT_FOUND_DATA);
            ResponseSuccess(res, flimDetail)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    deleteFlim = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            await DeleteFlim(id);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    updateFlim = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        const basic_info = req.body;
        try {
            if (!req.file) {
                let old_image: any = await getURL(id);
                basic_info.hinh_anh = old_image.hinh_anh;
            } else {
                const result = await cloudinary.uploader.upload(req.file.path);
                basic_info.hinh_anh = result.url;
            }      
            await UpdateFLim(basic_info,id);
            ResponseSuccess(res)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }

}

export default new FlimController;