import { NextFunction, Request, Response, RequestHandler } from "express"
import { DbMysql } from "../data-source";
import { CreateUser } from "../dtos/CreateUser.dto";

const userController = {
    getRegister: (req: Request, res: Response, next: NextFunction) => {
        return res.render('register', { layout: false });
    },
    getLogin: (req: Request, res: Response, next: NextFunction) => {
        return res.render('login', { layout: false })
    },
    createUser: async (req: Request<{}, {}, CreateUser>, res: Response, next: NextFunction):Promise<void> => {
        const { name, email, password, passwordCheck } = req.body;
        if (password !== passwordCheck) return next(new Error("Password doesn't match!"));
        try {
            const createUser = await DbMysql.query(
                'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
                [name, email, password]
            );
            res.status(201).json({ message: 'User created successfully', user: createUser });
        } catch (error) {
            next(error);
        }
    },
}


export default userController;