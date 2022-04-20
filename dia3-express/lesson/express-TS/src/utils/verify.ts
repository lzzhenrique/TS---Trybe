import Book from "../interfaces/Book";

const properties = ["type", "name", "price", "image", "author", "publishingCompany", "isbn"];

const validateProperties = (book: Book): [boolean, string | null] => {
  for(let i = 0; properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call((book), properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null]
}

const validateValues = (book: Book): [boolean, string | null] => {
  const entries = Object.entries(book);

  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if(!value) return [false, property];
  }
  return [true, null]
}

const validateBooks = (book: Book): [boolean, string | null] => {
  let [valid, property] = validateProperties(book);

    if (!valid) return [false, `O campo ${property} é obrigatório.`];

    [valid, property] = validateValues(book);

    if (!valid) return [false, `O campo ${property} não pode ser nulo ou vazio.`];

    return [true, null];
}

export default validateBooks;