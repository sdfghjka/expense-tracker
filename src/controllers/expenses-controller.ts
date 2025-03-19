import { NextFunction, Request, Response, RequestHandler } from "express"
import { DbMysql } from "../data-source";
import { Expenses } from "../types/response";

const expensesController = {
  getExpenses: async (req: Request, res: Response, next: NextFunction) => {
    req.flash('success_msg', 'seccess')
    const records = await DbMysql.query("SELECT * FROM record");
    return res.render('index', { expenses: records });
  },
  getNewExpenses: async (req: Request, res: Response, next: NextFunction) => {
    const categories = await DbMysql.query("SELECT * FROM category");
    return res.render('news', {categories})
  },
  createExpenses: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const body: Expenses = req.body; 
        res.json(body); 
    } catch (error) {
        next(error);
    }
}


}
export default expensesController;