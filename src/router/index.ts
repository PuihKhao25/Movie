import {Router} from "express";
import auth from "./auth";
import admin from "./flim";
import banner from "./banner";
import Cinima from "./CinemaSystem";
import cumrap from './cumrap';
import chair from './Chair';
import web from './web';
import rapPhim from './rapPhim';
import lichChieu from './lichChieu';
import datve from './datVe';

const router: Router = Router()

router.use('/auth', auth);
router.use('/admin', admin);
router.use('/admin/banner', banner);
router.use('/cinemasystem', Cinima);
router.use('/cumrap', cumrap);
router.use('/chair', chair);
router.use('/web',web);
router.use('/rapphim',rapPhim);
router.use('/lichchieu',lichChieu);
router.use('/datve',datve);

export default router
