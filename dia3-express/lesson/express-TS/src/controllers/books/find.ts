import { Request, Response, NextFunction } from "express";
import reader from '../../utils/reader';
import status from '../../utils/status';

const findBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isbn } = req.params;

    if (isbn) {
      const books = await reader();
      const book = books.find(book => book.isbn === isbn);

      if (!book) return res.status(status.NOT_FOUND).send('Book not find');

      return res.status(status.OK).json(book);
    }
    const books = await reader();
    return res.status(status.OK).json(books);

  } catch(e) {
    next(e);
  }
}

export default findBooks;