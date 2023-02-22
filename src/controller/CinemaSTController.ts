import { Request, Response } from "express";
import { CreateSystem, ListSystem, DeleteSystem, DetailSystem, UpdateSystem, getURL } from '../model/rapflim';
import { ResError } from "../constant";
import cloudinary from "../middlewares/cloudinary";
import {
    SystemError,
    ResponseFailed,
    ResponseSuccess,
} from "../constant/response";

class CinemaSystemController {
    postCinemaSytem = async (req: Request, res: Response) => {
        let basic_info = req.body;
        try {
            if (req.file) {
                let result = await cloudinary.uploader.upload(req.file.path);
                basic_info.logo = result.url;
            }
            await CreateSystem(basic_info);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    getCinemaSystem = async (req: Request, res: Response) => {
        try {
            let system = await ListSystem();
            ResponseSuccess(res, system);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    getDetailCinimaSystem = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            let detailSystem = await DetailSystem(id);
            ResponseSuccess(res, detailSystem);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    updateCinimaSystem = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        let basic_info = req.body;
        try {
            if (!req.file) {
                let old_image: any = await getURL(id); ``
                basic_info.logo = old_image.logo;
            } else {
                const result = await cloudinary.uploader.upload(req.file.path);
                basic_info.logo = result.url;
            }
            delete basic_info.hinh_anh;
            
            await UpdateSystem(basic_info, id);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    deleteCinimaSystem = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            await DeleteSystem(id);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
}

export default new CinemaSystemController;