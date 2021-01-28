import CatsDatabase from "../db/catsDb";
import Cat from "../models/cat";

export default class CatService {
  private repository: CatsDatabase
  constructor(){
    this.repository = new CatsDatabase();
  }

  getCats(): Cat[] {
    console.log(this.repository)
    return [];
  }
}