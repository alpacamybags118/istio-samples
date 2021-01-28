import Cat from '../models/cat';
import * as fs from 'fs'

export default class CatsDatabase {
  db: Map<string, Cat>

  constructor() {
    this.db = new Map<string, Cat>();
    this.PopulateDatabase();
  }

  private PopulateDatabase() {
    let buffer;

    try {
      buffer = fs.readFileSync('./db/initialValues.json', {encoding: 'utf8'});
    } catch(e) {
      throw e;
    }

    const initialCats = JSON.parse(buffer);
    initialCats.forEach(cat => {
      this.db.set(cat.breed, {
        breed: cat.breed,
        hairLength: cat.hairLength,
        color: cat.color,
      });
    })
  }
}