import { Request, Response } from "express";
import { ListRevenue } from "../model/revenue";

class revenueController {
  listRevenue = async (req: Request, res: Response) => {
    res.send("ffff");
  };
}

export default new revenueController();
