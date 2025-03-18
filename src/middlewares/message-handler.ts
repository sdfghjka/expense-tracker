import { NextFunction } from "express";
import { Request, Response } from "express-serve-static-core";
export default (req: Request, res:Response, next: NextFunction)=>{
    res.locals.success_msg = req.flash("success_msg");
    next();
}