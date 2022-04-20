import { question } from 'readline-sync'

enum months {
  janeiro = 1,
  fevereiro,
  março,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro
}

enum climate {
  verao,
  outono,
  inverno,
  primavera
}

function findData() {
  const quest = question('Send yout actual month and your hemisfery ')

  const month = months[quest.split(' ')[0]]
  const hemisfery = quest.split(' ')[1]

  if (hemisfery == 'norte') {

  }
}

findData()
