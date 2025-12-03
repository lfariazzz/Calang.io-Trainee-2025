import express, { json} from 'express'
import cors from "cors";
import router from './routes';

export function createApp(){
    const app = express();
    app.use(json());
    app.use("/api", router);
    
    const corsOptions = {
        origin: '*',
    }
    app.use(cors(corsOptions))
    return app;
}