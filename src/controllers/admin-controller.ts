import { Request, Response } from "express"
const adminController = {
    getRestaurants: (req: Request, res: Response) => {
      return res.render('admin/restaurants')
    }
  }


export default  adminController;