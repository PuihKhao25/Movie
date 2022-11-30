import path from "path";
import { NextFunction, Request, Response } from "express";
import multer from 'multer'
const storage = multer.diskStorage({
  destination: "./hinh_anh/",
  filename: (req:Request, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

export default upload
