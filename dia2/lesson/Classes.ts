enum EyeColor {
  Black = 'Pretos',
  Blue = 'Azuis',
  Green = 'Verdes',
  Brown = 'Castanhos',
}


class Person {
  name: string;
  birthDate: Date;
  eyeColor: EyeColor

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} esta falando.`);
  }

  eat(): void {
    console.log(`${this.name} esta comendo.`)
  }

  walk(): void {
    console.log(`${this.name} esta andando`)
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);