"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reader_1 = __importDefault(require("../../utils/reader"));
const writer_1 = __importDefault(require("../../utils/writer"));
const removeBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isbn } = req.params;
        const books = yield (0, reader_1.default)();
        const index = books.findIndex(book => book.isbn === isbn);
        if (index === -1)
            return res.status(404).send('nao encontrie nada, paspaião');
        books.slice(index, 1);
        yield (0, writer_1.default)(books);
        return res.status(669).send();
    }
    catch (e) {
        next(e);
    }
});
exports.default = removeBooks;
