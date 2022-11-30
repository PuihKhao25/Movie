import { Request, Response } from "express";
import { CreateChair, ListAllChair, ListDetailChair, UpdateChair, DeleteChair } from '../model/Chair';
import { ResError } from "../constant";
import {
    SystemError,
    ResponseFailed,
    ResponseSuccess,    
} from "../constant/response";

class CumRapController {
    postChair = async (req: Request, res: Response) => {
        let basic_info = req.body;
        try {
            await CreateChair(basic_info);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    getChair = async (req: Request, res: Response) => {
        try {
            let cumrap = await ListAllChair();
            ResponseSuccess(res, cumrap)
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    getDetailChair = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            let cumrap = await ListDetailChair(id);
            ResponseSuccess(res, cumrap)
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    updateChair = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        let basic_info = req.body;
        try {
            await UpdateChair(basic_info, id)
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
    deleteChair = async (req: Request, res: Response) => {
        let id = Number(req.params.id);
        try {
            await DeleteChair(id);
            ResponseSuccess(res);
        } catch (e: any) {
            return SystemError(res, e);
        }
    }
}

export default new CumRapController;