"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var months;
(function (months) {
    months[months["janeiro"] = 1] = "janeiro";
    months[months["fevereiro"] = 2] = "fevereiro";
    months[months["mar\u00E7o"] = 3] = "mar\u00E7o";
    months[months["abril"] = 4] = "abril";
    months[months["maio"] = 5] = "maio";
    months[months["junho"] = 6] = "junho";
    months[months["julho"] = 7] = "julho";
    months[months["agosto"] = 8] = "agosto";
    months[months["setembro"] = 9] = "setembro";
    months[months["outubro"] = 10] = "outubro";
    months[months["novembro"] = 11] = "novembro";
    months[months["dezembro"] = 12] = "dezembro";
})(months || (months = {}));
var climate;
(function (climate) {
    climate[climate["verao"] = 0] = "verao";
    climate[climate["outono"] = 1] = "outono";
    climate[climate["inverno"] = 2] = "inverno";
    climate[climate["primavera"] = 3] = "primavera";
})(climate || (climate = {}));
function findData() {
    var quest = (0, readline_sync_1.question)('Send yout actual month and your hemisfery ');
    var month = quest.split(' ')[0];
    console.log(month);
}
findData();
