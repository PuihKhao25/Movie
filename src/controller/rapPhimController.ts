import { Request, Response } from "express";
import {
  UpdateRapPhim,
  DeleteRapPhim,
  GetDetailRapPhim,
  GetAllRapPhim,
  CreateRapPhim,
} from "../model/rapflim";
import { ResError } from "../constant";
import cloudinary from "../middlewares/cloudinary";
import {
  SystemError,
  ResponseFailed,
  ResponseSuccess,
} from "../constant/response";

class RapPhimController {
  postRapPhim = async (req: Request, res: Response) => {
    let ten_rap = req.body.ten_rap;
    let dia_chi = req.body.dia_chi;
    let ma_cum_rap = Number(req.body.ma_cum_rap);
    console.log(ten_rap);
    try {
      await CreateRapPhim(ten_rap, dia_chi, ma_cum_rap);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getRapPhim = async (req: Request, res: Response) => {
    try {
      let listRap = await GetAllRapPhim()
      ResponseSuccess(res,listRap)
    } catch (e: any) {
      return SystemError(res,e);
    }
  };
  getDetailRapPhim = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    try {
      let detailRap = await GetDetailRapPhim(id);
      ResponseSuccess(res,detailRap)
    } catch (e :any) {
      return SystemError(res,e);
    }
  };
  updateRapPhim = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let basic_info = req.body;
    try {
      await UpdateRapPhim(basic_info,id);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  deleteRapPhim = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    try {
      await DeleteRapPhim(id);
      ResponseSuccess(res)
    } catch (e: any) {
      return SystemError(res,e);
    }
  };
}

export default new RapPhimController();
