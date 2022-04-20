// enum StudentStatus {
//   Active = 1,
//   Inactive,
//   Paused
// }

// let newStudentStatus: StudentStatus = StudentStatus.Paused
// // let newStudentStatus: StudentStatus.Paused

// console.log(newStudentStatus)


// enum StatusCode {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized,
//   PaymentRequired,
//   Forbidden,
//   NotFound,
// }

// const ok = StatusCode.OK;
// const unautho = StatusCode["Forbidden"];
// const indiceOK = StatusCode["OK"];
// const stringBadReq = StatusCode[400];

// console.log(ok); //saída: 200
// console.log(indiceOK); //saída: 200
// console.log(stringBadReq); //saída: BadRequest
// console.log(unautho); //saída: BadRequest



// enum week {
//   domingo,
//   segunda,
//   terca,
//   quarta,
//   quinta,
//   sexta,
//   sabado
// }

// const dom = week[0]


// console.log(dom)


enum rainbow {
  VERM = 'vermelho',
  VERD = 'verde',
  A = 'azul',
  AMA = 'amarelo',
  R = 'roxo',
  L = 'laranja',
  AE = 'azul escuro'
}

enum routine {
  salvar,
  imprimir, 
  abrir,
  visualizar,
  fechar
}

enum routine {
  NORTE = 'N',
  LESTE = 'L',
  SUL = 'S',
  OESTE = 'O',
}