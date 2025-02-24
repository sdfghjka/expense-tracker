import express, { Application, Request, Response, Router } from 'express';
import { engine } from 'express-handlebars';  
import { DataSource } from 'typeorm';
import mainRouter from './routers';
const app: Application = express();
//
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");


//
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "tutor",
    synchronize: true,
    logging: true,
    entities: [], 
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    //



app.use(express.static("public"));


app.use(mainRouter);

app.get('/users/signup', (req: Request, res: Response) => {
    res.render('users/signup'); 
});
app.get('/users/login', (req: Request,res: Response)=>{
    res.render('users/login')
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});
