import CatsDatabase from "../db/catsDb";
import Cat from "../models/cat";

export default class CatService {
  private repository: CatsDatabase
  constructor(){
    this.repository = new CatsDatabase();
  }

  getCats(): Cat[] {
    return this.repository.getCats();
  }

  getCat(breed: string): Cat|undefined {
    return this.repository.getCat(breed);
  }

  addCat(cat: Cat) {
    if(cat.breed === undefined || cat.color === undefined || cat.hairLength === undefined) {
      throw new Error("Cat object missing properties");
    }

    if(this.repository.getCat(cat.breed) !== undefined) {
      throw new Error('Cat already exists!');
    }

    this.repository.addCat(cat);
  }
}