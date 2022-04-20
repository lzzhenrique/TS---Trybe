"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const properties = ["type", "name", "price", "image", "author", "publishingCompany", "isbn"];
const validateProperties = (book) => {
    for (let i = 0; properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call((book), properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
};
const validateValues = (book) => {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value)
            return [false, property];
    }
    return [true, null];
};
const validateBooks = (book) => {
    let [valid, property] = validateProperties(book);
    if (!valid)
        return [false, `O campo ${property} é obrigatório.`];
    [valid, property] = validateValues(book);
    if (!valid)
        return [false, `O campo ${property} não pode ser nulo ou vazio.`];
    return [true, null];
};
exports.default = validateBooks;
