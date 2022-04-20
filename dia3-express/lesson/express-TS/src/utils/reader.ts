import fs from 'fs/promises';
import Book from '../interfaces/Book';

async function read(): Promise<Book[]> {
  const catalogue = await fs.readFile('../model/books.json', 'utf-8');

  const books: Book[] = JSON.parse(catalogue);

  return books;
}

export default read;