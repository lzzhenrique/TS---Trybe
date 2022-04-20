"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const find_1 = __importDefault(require("./find"));
const remove_1 = __importDefault(require("./remove"));
const update_1 = __importDefault(require("./update"));
const create_1 = __importDefault(require("./create"));
const router = (0, express_1.Router)({ mergeParams: true });
router.get('/books', find_1.default);
router.post('/book', create_1.default);
router.put('/book', update_1.default);
router.delete('/book', remove_1.default);
exports.default = router;
