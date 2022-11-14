const sum = require('./app')

test('Penjumlahan nilai x dan y menggunakan sum :', () => {
    expect(sum(20, 5)).toBe(25)
    expect(sum(10, 10)).toBe(20)
    expect(sum(5, 2)).toBe(7)
})