import { ErrorRequestHandler, NextFunction } from "express"

export const ErrorHandler: ErrorRequestHandler =  (error: Error, req, res, next) =>{
    console.log(error.message);
}