import { Request, Response } from "express";
import { ListFlimForWeb } from "../model/flim";
import { ListPhongveForWeb } from "../model/datVe";
import {
  SystemError,
  ResponseFailed,
  ResponseSuccess,
} from "../constant/response";

class WebController {
  getListPhim = async (req: Request, res: Response) => {
    try {
      let listFlim = await ListFlimForWeb();
      ResponseSuccess(res, listFlim);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getListPhongVe = async (req: Request, res: Response) => {
    let malichchieu = req.query.malichchieu ? Number(req.query.malichchieu) : 1;
    try {
       let f= await ListPhongveForWeb(malichchieu);
        ResponseSuccess(res,f);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
}

export default new WebController();
