import express, {Request, Response} from 'express';

import CatService from './services/catService';

const catService = new CatService();

const app = express();
const port = 5000;

app.get("/cats", (req: Request, res: Response) => {
  catService.getCats();

  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})