import { Request, Response } from "express";
import { createContactService } from "../services/contact-service"

export const postContact = async(req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await createContactService(bodyValue)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}
