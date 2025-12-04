import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { movie } from '../models/movie-model'
import { contact } from '../models/contact-model'

type Data = {
  movies: movie[],
  contacts: contact[],
}

const adapter = new JSONFile<Data>('src/database/database.json')
export const db = new Low<Data>(adapter, { movies: [], contacts: [] })

export const loadDB = async () => {
  await db.read()
  db.data ||= { movies: [], contacts: [] }
}

export const saveDB = async () => {
  await db.write()
}
