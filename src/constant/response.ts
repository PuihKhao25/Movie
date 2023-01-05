import { Response } from "express";
import { ResError } from ".";

export const SystemError = (res: Response, error: Error) =>{
    console.log(error);
  res.status(500).json({
    code: "SYS500",
    message: "System Error",
  })};

export const ResponseFailed = (res: Response, message: any) =>{
    console.log(message.message)
    res.status(400).json(message);
}

export const ResponseSuccess = (res: Response, content?: any) =>
  res.status(200).json({
    code: "OK200",
    message: "OK",
    content,
  });
