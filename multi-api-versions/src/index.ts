import bodyParser from 'body-parser';
import express, {Request, Response} from 'express';

import CatService from './services/catService';

const catService = new CatService();

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/cats", (req: Request, res: Response) => {
  const cats = catService.getCats();

  res.send(JSON.stringify(cats));
});

app.get("/cat", (req: Request, res: Response) => {
  const breed = req.query.breed;

  if(breed === undefined) {
    res.statusCode = 400;
    res.send("Missing breed query string");
  } else {
    const cat = catService.getCat(breed.toString());

    if (cat === undefined) {
      res.statusCode = 404;
      res.send("Cat with specified breed not found");
    } else {
      res.send(JSON.stringify(cat));
    }
  }
});

app.post("/cat", (req: Request, res: Response) => {
  try {
    catService.addCat(req.body);
    res.sendStatus(200);
  } catch(e) {
    res.statusCode = 500;
    res.send(e.toString());
  }
})


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})