describe('Соответствие значений', () => {
    it('Проверка а на значение 10', () => {
        let a = 10; //  то, что мы проверяем
        expect(a).toBe(10);
        // expect(a).not.toBe(10);
    });
    it('Сравнение объектов', () => {
        let user1 = {
            name: 'Ann',
            age: 21
        };
        let user2 = {
            name: 'Ann',
            age: 20
        };
        expect(user1).toEqual(user2);
        // expect(a).not.toBe(10);

        // expect(a).toBeNull();
        // expect(a).not.toBeUndefined();
        // expect(a).not.toBeFalsy();
        // expect(a).not.toBeTruthy();
        // expect(a).toBeGreaterThanOrEqual();
        // expect(a).toBeGreaterThan();
        // expect(a).toBeLessThan();
        // expect(a).toBeLessThanOrEqual();
        // expect(a).toBeCloseTo();

    });
    it('Regexp', () => {
        let str = 'Test AbcD jasmine';

        expect(str).toMatch(/abcd/i);
        expect(str).not.toMatch(/abcd/);
        // expect(a).not.toBe(10);
    });
    it('Array', () => {
        let arr = ['white', 'black'];

        expect(arr).toContain('black');
        expect(arr).not.toContain('red');
        // expect(a).not.toBe(10);
    });
});