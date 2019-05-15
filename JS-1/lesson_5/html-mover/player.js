/**
 * Объект игрока, в котором содержатся его текущие координаты
 * @type {{changePosition({x: int, y: int}): void, x: number, y: number}}
 */
let player = {
    x: 0,
    y: 0,
    
    /**
     * Метод задает пользователю новое расположение.
     * @param {{x: int, y: int}} nextPoint координаты куда ставим пользователя.
     */
    changePosition( nextPoint ) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};
