type Point = {
  x: number;
  y: number;
}

function coord(point: Point) {
  console.log("O valor da cordenada x é: " + point.x);
  console.log("O valor da coordenada y é: " + point.y);
}

coord({ x: 100, y: 100 });


type Bird = {
  eyes: number;
  feathersColor: string;
  height: number;
  weight: number;
}

type func = (x: number, y: number) => number;


// TYPE UNYONS!!!
function returnCPF(cpf: number | string) {
  console.log("Seu CPF é" + cpf);
}

type StatesOfMatter = "liquid" | "solid" | "gaseous";

type userID = string | number

type OS = 'linux' | 'mac' | 'Windows'

type vogals = 'A' | 'E' | 'I' | 'O' | 'U'
