import * as express from "express";
import WebController from "../controller/webController";
import upload from '../middlewares/upload'

const router = express.Router();

router.get("/phim", WebController.getListPhim);

export default router;
