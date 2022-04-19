const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];


function convert(val: number, forUnity: string, toUnity: string) {
  if (forUnity == toUnity) return 'The unitys are the same!';

  const forIndex = units.indexOf(forUnity)
  const toIndex = units.indexOf(toUnity)

  const exponent = (toIndex - forIndex)

  return Math.pow(exponent, 10)

}

console.log(convert(100, 'km', 'm'))