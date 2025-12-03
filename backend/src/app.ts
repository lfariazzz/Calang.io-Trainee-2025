import express, { json} from 'express'
import cors from "cors";

export function createApp(){
    const app = express();
    app.use(json());

    const corsOptions = {
        origin: '*',
    }
    app.use(cors(corsOptions))
    return app;
}