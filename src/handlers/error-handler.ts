import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const ErrorHandler: ErrorRequestHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack);

    if (error instanceof Error) {
        req.flash("error_msg", `${error.name}: ${error.message}`);
    }
    req.flash("error_msg", `${error}`);
    res.redirect("back");
    next(error);
};
