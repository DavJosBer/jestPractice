const dollarToYen = (a, b) => {
    return a * b
};
const euroToDollar = (a, b) => {
    return a * b
};
const yenToPound = (a, b) => {
    return a * b
};
console.log(dollarToYen(1, 105.62));
console.log(euroToDollar(1, 1.21));
console.log(yenToPound(1, 1))

module.exports = { dollarToYen, euroToDollar, yenToPound }