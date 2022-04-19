"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapezium = exports.diamond = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(base) {
    return Math.pow(base, 2);
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function diamond(bigD, lesserD) {
    return (bigD * lesserD) / 2;
}
exports.diamond = diamond;
function trapezium(height, biggerBase, lesserBase) {
    return ((biggerBase * lesserBase) * height) / 2;
}
exports.trapezium = trapezium;
function circle(radium) {
    return (radium ** 2) * 3.14;
}
exports.circle = circle;
