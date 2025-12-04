import { contact } from "../models/contact-model"
import { insertContact } from "../repositories/contact-repository"

export const createContactService = async(contact: contact) => {
    if(Object.keys(contact).length !== 0){
        await insertContact(contact)
        return {statusCode:200,body:{msg:"Created!"}};
    }else{
        return {statusCode:400,body:{msg:"badrequest"}};
    }
    
}