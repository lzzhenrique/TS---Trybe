import express, { Request, Response } from 'express';
import router from './controllers/books/router';

const app = express();

app.use(express.json())

const PORT = 8000;

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
