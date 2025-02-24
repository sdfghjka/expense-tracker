import { Request, Response } from "express"

const restaurantController = {
    getRestaurants: (req:Request, res:Response) => {
      return res.render('restaurants')
    }
  }
export default restaurantController;