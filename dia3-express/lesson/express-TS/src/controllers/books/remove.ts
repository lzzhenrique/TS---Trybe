import { Request, Response, NextFunction } from "express";
import read from "../../utils/reader";
import write from "../../utils/writer";

const removeBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isbn } = req.params;

    const books = await read();
    const index = books.findIndex(book => book.isbn === isbn);

    if (index === -1) return res.status(404).send('nao encontrie nada, paspaião');

    books.slice(index, 1);

    await write(books);

    return res.status(669).send()
  } catch(e) {
    next(e);
  }
}

export default removeBooks;