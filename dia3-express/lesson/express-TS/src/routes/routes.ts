import { Router, Request, Response } from 'express';
import books from '../controllers/books/router'

const root = Router({ mergeParams: true });

root.use('/books', books);
