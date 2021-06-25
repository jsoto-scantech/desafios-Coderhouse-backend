import express, {Request,Response,NextFunction} from 'express'

const app = express();

app.get('/', (req: Request, res:Response, next: NextFunction )=> {
    res.send("hello");
});


app.listen('8000', () => console.log("servidor andando"));