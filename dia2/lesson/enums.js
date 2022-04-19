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
var week;
(function (week) {
    week[week["domingo"] = 0] = "domingo";
    week[week["segunda"] = 1] = "segunda";
    week[week["terca"] = 2] = "terca";
    week[week["quarta"] = 3] = "quarta";
    week[week["quinta"] = 4] = "quinta";
    week[week["sexta"] = 5] = "sexta";
    week[week["sabado"] = 6] = "sabado";
})(week || (week = {}));
var dom = week[0];
console.log(dom);
