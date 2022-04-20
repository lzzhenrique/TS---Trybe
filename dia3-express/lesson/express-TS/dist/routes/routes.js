"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = __importDefault(require("../controllers/books/router"));
const root = (0, express_1.Router)({ mergeParams: true });
root.use('/books', router_1.default);
