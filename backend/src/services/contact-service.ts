import { contact } from "../models/contact-model"
import { insertContact, findAllContacts } from "../repositories/contact-repository"

export const getContactService = async() => {
    const data = await findAllContacts()
    let response = null

    if(data){
        response = {
            statusCode: 200,
            body: data
        }
    }else{
        response = {
            statusCode: 202,
            body: null,
        }
    }
    return response
}

export const createContactService = async(contact: contact) => {
    if(Object.keys(contact).length !== 0){
        await insertContact(contact)
        return {statusCode:200,body:{msg:"Created!"}};
    }else{
        return {statusCode:400,body:{msg:"badrequest"}};
    }
    
}

