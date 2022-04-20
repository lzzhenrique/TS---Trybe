import fs from 'fs/promises';
import Book from '../interfaces/Book';

async function write(book: Book[]): Promise<void> {
  await fs.writeFile("./books.json", JSON.stringify(book));
}

export default write;