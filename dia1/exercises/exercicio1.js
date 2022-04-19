var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(val, forUnity, toUnity) {
    if (forUnity == toUnity)
        return 'The unitys are the same!';
    var forIndex = units.indexOf(forUnity);
    var toIndex = units.indexOf(toUnity);
    var exponent = (toIndex - forIndex);
    return Math.pow(exponent, 10);
}
console.log(convert(100, 'km', 'm'));
