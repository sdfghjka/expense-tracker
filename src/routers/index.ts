import express, { Router, Request, Response, NextFunction } from "express";
import expensesController from "../controllers/expenses-controller";
import userRouter from "./modules/user";
const router: Router = Router();

router.use('/user',userRouter);
router.get('/new', expensesController.getNewExpenses)
router.post('/create', expensesController.createExpenses);
router.get('/', expensesController.getExpenses);
export default router;

