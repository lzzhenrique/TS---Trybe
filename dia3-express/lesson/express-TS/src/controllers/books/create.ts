import { Request, Response, NextFunction } from "express";
import validateBooks from "../../utils/verify";
import read from "../../utils/reader";
import write from "../../utils/writer";
import Book from "../../interfaces/Book";

const createBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book: Book = req.body;

    const validate = validateBooks(req.body);

    if (!validate[0]) return res.status(400).send(validate[1]);
    
    const books = await read();

    books.push(book);

    await write(books);

    return res.status(201).json(book);
  } catch(e) {
    next(e);
  }
}

export default createBooks;