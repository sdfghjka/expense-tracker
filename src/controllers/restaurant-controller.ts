import { NextFunction, Request, Response } from "express"
import { DbMysql } from "../data-source";
const restaurantController = {

    getRestaurants: async (req:Request, res:Response, next: NextFunction) => {
      req.flash('success_msg','seccess')
      const records = await DbMysql.query("SELECT * FROM record");
      return res.render('index',{expenses: records});
    }
  }
export default restaurantController;