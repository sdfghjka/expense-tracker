import express, { Router, Request, Response, NextFunction } from "express";
import userController from "../../controllers/user-controller";
const router: Router = Router();

router.get('/register', userController.getRegister)
router.get('/login', userController.getLogin);
router.post('/register',userController.createUser)

export default router;