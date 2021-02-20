const { dollarToYen } = require('./app.js');
const { euroToDollar } = require('./app.js');
const { yenToPound } = require('./app.js');

test('3 and 105.62 should return 316.86', () => {
    let total = dollarToYen(3, 105.62);
    expect(total).toBe(316.86)
});
test('3 and 1.21 should return 3.63', () => {
    let total = euroToDollar(3, 1.21);
    expect(total).toBe(3.63)
});
test('3 and 1 should return 3', () => {
    let total = dollarToYen(3, 1);
    expect(total).toBe(3)
})