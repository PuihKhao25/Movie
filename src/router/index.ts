import { Router } from "express";
import auth from "./auth";
import admin from "./flim";
import banner from "./banner";
import Cinima from "./CinemaSystem";
import cumrap from "./cumrap";
import chair from "./Chair";
import web from "./web";
import rapPhim from "./rapPhim";
import lichChieu from "./lichChieu";
import datve from "./datVe";
import revenues from "./revenues";

const router: Router = Router();

router.use("/", auth);
router.use("/", admin);
router.use("/", banner);
router.use("/cinemasystem", Cinima);
router.use("/cumrap", cumrap);
router.use("/chair", chair);
router.use("/", web);
router.use("/rapphim", rapPhim);
router.use("/", lichChieu);
router.use("/", datve);
router.use("/doanhthu", revenues);

export default router;
