import { Request, Response, NextFunction } from "express";
import validateBooks from "../../utils/verify";
import read from "../../utils/reader";
import write from "../../utils/writer";
import Book from "../../interfaces/Book";

const updateBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isbn } = req.params;
    const editedBook: Book = req.body;

    const validate = validateBooks(req.body);
    if (!validate[0]) return res.status(400).send(validate[1]);

    const books = await read();
    const index = books.findIndex(book => book.isbn === isbn);

    if (index === -1) return res.status(404).send('nao achou o livro, bobaiao');

    books.splice(index, 1, editedBook);

    await write(books);

    return res.status(200).json(editedBook);
  } catch(e) {
    next(e);
  }
}

export default updateBooks;