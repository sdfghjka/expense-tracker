import express, { Application, Request, Response, Router } from 'express';
import { engine } from 'express-handlebars';
import mainRouter from './routers';
import dotenv from 'dotenv';
import { DbMysql, connectDatabase } from './data-source';
import session from 'express-session';
import flash from 'connect-flash';
import messageHandler from './middlewares/message-handler';
dotenv.config();
const app: Application = express();
const sessionSecret = process.env.SESSION_SECRET || 'default-secret'; 
//
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(session({
    secret: sessionSecret,
    resave: false, 
    saveUninitialized: false
}))
app.use(flash());

app.use(express.static("public"));

app.use(messageHandler)

app.use(mainRouter);

async function initDbMysql() {
    await DbMysql.initialize();
    console.log('-> Database mysql connection established');
}
connectDatabase().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000/');
    });

});
