import express, { Router, Request, Response } from "express";
import adminRouter from "./modules/admin";
import restaurantController from "../controllers/restaurant-controller";
const router: Router = Router();

router.use("/admin", adminRouter);
router.get('/restaurants', restaurantController.getRestaurants);
router.use('/', (req: Request, res: Response) => res.redirect('/restaurants'))

export default router;

