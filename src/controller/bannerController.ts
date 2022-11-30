import { Request, Response } from "express";
import { CreateBanner, ListBanner, DeleteBanner,getURL,UpdateBanner } from '../model/banner';
import { ResError } from "../constant";
import cloudinary from "../middlewares/cloudinary"
import {
    SystemError,
    ResponseFailed,
    ResponseSuccess,
} from "../constant/response";

class BannerController {
    postBanner = async (req: Request, res: Response) => {
        const basic_info = req.body;
        try {
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                basic_info.hinh_anh = result.url;
            }
            await CreateBanner(basic_info)
            ResponseSuccess(res)
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    getAllBanner = async (req: Request, res: Response) => {
        try {
            let banner = await ListBanner();
            ResponseSuccess(res, banner);
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    deleteBanner = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            await DeleteBanner(id);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
    updateBanner = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        let basic_info = req.body;
        try {
            if (!req.file) {
                let old_image: any = await getURL(id);``
                basic_info.hinh_anh = old_image.hinh_anh;
            } else {
                const result = await cloudinary.uploader.upload(req.file.path);
                basic_info.hinh_anh = result.url;
            }       
            await UpdateBanner(basic_info,id);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e)
        }
    }
}

export default new BannerController;