import { Request, Response } from "express";
import { ListFlimForWeb } from '../model/flim';
import {
    SystemError,
    ResponseFailed,
    ResponseSuccess,
} from "../constant/response";

class WebController {
    getListPhim = async (req: Request, res: Response) => {
        let phim
        try {
            let listFlim = await ListFlimForWeb();
            ResponseSuccess(res, listFlim);
        } catch (e: any) {
            return SystemError(res, e)
        }
    }

}

export default new WebController;