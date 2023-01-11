import { Request, Response } from "express";
import { ListPhongveForWeb, ListBookedTicks } from "../model/datVe";
import { ListBanner } from "../model/banner";
import { ListFlimForWeb, ListDetail } from "../model/flim";
import { ResError } from "../constant";
import { GetAllRapPhimForWeb } from "../model/rapflim";
import { GetCalendaPhim } from "../model/flim";
import { GetCumRapSystem } from "../model/cumrap";
import { GetCalendarSystem } from "../model/lichChieu";
import { ListAllChairForWeb } from "../model/Chair";
import {
  SystemError,
  ResponseFailed,
  ResponseSuccess,
} from "../constant/response";

class WebController {
  getInfoLichChieuPhim = async (req: Request, res: Response) => {
    try {
      // let listFlim = await ListFlimForWeb();
      ResponseSuccess(res);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getListPhongVe = async (req: Request, res: Response) => {
    let malichchieu = req.query.malichchieu ? Number(req.query.malichchieu) : 1;
    try {
      let f = await ListPhongveForWeb(malichchieu);
      ResponseSuccess(res, f);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getListBanner = async (req: Request, res: Response) => {
    try {
      let banner = await ListBanner();
      ResponseSuccess(res, banner);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getListPhim = async (req: Request, res: Response) => {
    const keyword = req.query.keyword;
    const status = Number(req.query.status) ? Number(req.query.status) : 0;
    try {
      let listFlim = await ListFlimForWeb(keyword, status);
      ResponseSuccess(res, listFlim);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getDetailPhim = async (req: Request, res: Response) => {
    let id = Number(req.params.id);
    // try {
    //   let flimDetail:any = await ListDetailForWeb(id);
    //   console.log(flimDetail);
    //   if (!flimDetail) return ResponseFailed(res, ResError.NOT_FOUND_DATA);
    //   ResponseSuccess(res, flimDetail);
    // } catch (e: any) {
    //   return SystemError(res, e);
    // }
  };
  getHeThongRap = async (req: Request, res: Response) => {
    let ma_he_thong_rap = req.query.ma_he_thong_rap;
    console.log(ma_he_thong_rap);

    try {
      let listHethong = await GetAllRapPhimForWeb(ma_he_thong_rap);
      ResponseSuccess(res, listHethong);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };

  getCumrap = async (req: Request, res: Response) => {
    let maHeThongRap = Number(req.query.maHeThongRap);
    try {
      let listCumRap = await GetCumRapSystem(maHeThongRap);
      ResponseSuccess(res, listCumRap);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getInfomationCalendarSystem = async (req: Request, res: Response) => {
    let ma_he_thong_rap = Number(req.query.maHeThongRap);
    try {
      let listCalendarSystem = await GetCalendarSystem(ma_he_thong_rap);
      ResponseSuccess(res, listCalendarSystem);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getCalendarSystem = async (req: Request, res: Response) => {
    let ma_phim = Number(req.query.maPhim);
    try {
      let listCalendarSystem = await GetCalendaPhim(ma_phim);
      ResponseSuccess(res, listCalendarSystem);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getChairSystem = async (req: Request, res: Response) => {
    let ma_rap = Number(req.query.maRap);
    try {
      let list = await ListAllChairForWeb(ma_rap);
      ResponseSuccess(res, list);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
  getListBookedTicks = async (req: Request, res: Response) => {
    let ma_lich_chieu = Number(req.query.malichchieu);
    try {
      const list = await ListBookedTicks(ma_lich_chieu);
      ResponseSuccess(res, list);
    } catch (e: any) {
      return SystemError(res, e);
    }
  };
}

export default new WebController();
