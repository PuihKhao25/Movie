import { Request, Response } from "express";
import {
  CreateLichChieu,
  ListLichChieu,
  DetailLichChieu,
  DeleteLichChieu,
  UpdateLichChieu,
} from "../model/lichChieu";
import { ResError } from "../constant";
import {
  SystemError,
  ResponseFailed,
  ResponseSuccess,
} from "../constant/response";

class LichChieuController {
  postLichChieu = async (req: Request, res: Response) => {
    let basic_info = req.body;
    try {
      CreateLichChieu(basic_info);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getLichChieu = async (req: Request, res: Response) => {
    try {
      let lichchieu = await ListLichChieu();
      ResponseSuccess(res, lichchieu);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getDetailLichChieu = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    try {
      let lichchieu = await DetailLichChieu(id);
      ResponseSuccess(res, lichchieu);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  updateLichChieu = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let basic_info = req.body;
    try {
      await UpdateLichChieu(basic_info, id);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  deleteLichChieu = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    try {
      await DeleteLichChieu(id);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
}

export default new LichChieuController();
