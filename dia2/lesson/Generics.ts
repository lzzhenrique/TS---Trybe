function getArray<T>(items : T[]) : T[] {
  return new Array().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");