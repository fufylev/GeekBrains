const pow = require('../pow');

describe('Функция должна возводить в степень', () => {
    it('Провека 2^3 === 8', () => {
        expect(pow(2,3)).toBe(8)
    })
    it('Провека 2^5 === 32', () => {
        expect(pow(2,5)).toBe(32)
    })
    it('Провека 3^3 === 27', () => {
        expect(pow(3,3)).toBe(27)
    })
});

describe('Проверка на нестандартные значения', () => {
    it('Провека на отрицательные аргументы', () => {
        expect(pow(-2,3)).toBeNull();
        expect(pow(2,-3)).toBeNull();
        expect(pow(-2,-3)).toBeNull();
    });
});