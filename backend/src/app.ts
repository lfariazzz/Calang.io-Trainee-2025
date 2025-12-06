import express, { json} from 'express'
import cors from "cors";
import router from './routes';

export function createApp(){
    const app = express();
    app.use(json());
    const corsOptions = {
        origin: 'http://localhost:5173',
    }
    app.use(cors(corsOptions))
    app.use("/api", router);
 
    return app;
}