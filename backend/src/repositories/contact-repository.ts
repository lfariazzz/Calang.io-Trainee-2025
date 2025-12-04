import { contact } from "../models/contact-model";

const database: contact[]=[

]

export const findAllContacts = async(): Promise<contact[]> => {
    return database
}
export const insertContact = async(contact: contact) => {
    database.push(contact)
}