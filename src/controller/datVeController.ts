import { Request, Response } from "express";
import {CreateDatVe,ListDatVe,DetailDatVe,DeleteDatVe,UpdateDatVe} from "../model/datVe";
import { ResError } from "../constant";
import {
  SystemError,
  ResponseFailed,
  ResponseSuccess,
} from "../constant/response";

class DatVeController {
  postDatVe = async (req: Request, res: Response) => {
    let basic_info = req.body.data
    try {
      basic_info.map(async(a:any)=>{
        await CreateDatVe(a)
      })
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getDatVe = async (req: Request, res: Response) => {
    try {
      let DatVe = await ListDatVe();
      ResponseSuccess(res, DatVe);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getDetailDatVe = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    try {
      let datVe = await DetailDatVe(id);
      ResponseSuccess(res, datVe);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  updateDatVe = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let basic_info = req.body;
    try {
      await UpdateDatVe(basic_info, id);
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  deleteDatVe = async (req: Request, res: Response) => {
    let ids = req.body.ids;
    try {
      await DeleteDatVe(ids);
      ResponseSuccess(res);
    } catch (e: any) { 
      return SystemError(res, e);
    }
  };
}

export default new DatVeController();
