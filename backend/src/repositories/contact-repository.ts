import { contact } from "../models/contact-model";

const database: contact[]=[

]

export const insertContact = async(contact: contact) => {
    database.push(contact)
}