import express, { Router, Request, Response, NextFunction } from "express";
import restaurantController from "../controllers/restaurant-controller";
const router: Router = Router();


router.get('/', restaurantController.getRestaurants);
router.get('/new',(req: Request, res: Response, next: NextFunction)=>{
    req.flash('success_msg','seccess')
    return res.render('news')
})

export default router;

