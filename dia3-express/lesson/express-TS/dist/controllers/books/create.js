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
const verify_1 = __importDefault(require("../../utils/verify"));
const reader_1 = __importDefault(require("../../utils/reader"));
const writer_1 = __importDefault(require("../../utils/writer"));
const createBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = req.body;
        const validate = (0, verify_1.default)(req.body);
        if (!validate[0])
            return res.status(400).send(validate[1]);
        const books = yield (0, reader_1.default)();
        books.push(book);
        yield (0, writer_1.default)(books);
        return res.status(201).json(book);
    }
    catch (e) {
        next(e);
    }
});
exports.default = createBooks;
