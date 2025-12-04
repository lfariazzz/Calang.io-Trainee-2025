import { contact } from "../models/contact-model";
import { db, loadDB, saveDB } from "../database/db"

export const findAllContacts = async(): Promise<contact[]> => {
    await loadDB();
    return db.data!.contacts
}
export const insertContact = async(newContact: contact) => {
    await loadDB();
    db.data!.contacts.push(newContact);
    await saveDB();
}