
import { Request,Response ,NextFunction} from "express";
import jwt from "jsonwebtoken";
import { ResError } from "../constant";
import {
  ResponseFailed,
} from "../constant/response";
export interface IPayload{
  id:string,
  loai_nguoi_dung:string
  iat:number,
  exp:number
}

export const verifyToken = (roles:String[]) => {
   return (req:Request, res:Response, next:NextFunction)=>{
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return ResponseFailed(res,ResError.UNAUTHORIZED);
    try {
      const roleName = jwt.verify(token, process.env.ACCESS_TOKEN || 'qwer1234@') as IPayload;
      if(roles.includes(roleName.loai_nguoi_dung)){
          req.params.current_user_id = roleName.id;
          next();
      }else{
        return ResponseFailed(res,ResError.ACCESS_DENIED)
      }
    } catch (error) {
      return ResponseFailed(res,ResError.TOKEN_INVALID)
    }
   }
};


