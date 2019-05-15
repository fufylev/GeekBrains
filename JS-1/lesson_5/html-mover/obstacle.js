/**
 * Объект создания препятствия
 * @type {{changePosition({x: int, y: int}): void, x: number, y: number}}
 */
let obstacle = {
    x: 0,
    y: 0,
    
    /**
     * метод получения координат препятствия
     */
    getObstacle() {
        
        this.x = Math.floor( Math.random() * config.colsCount );
        this.y = Math.floor( Math.random() * config.rowsCount );
        if ( this.x === player.x ) { // проверяем чтобы не попало на игрока
            if ( player.x === config.colsCount - 1 ) {
                this.x--;
            } else {
                this.x++;
            }
        }
        if ( this.y === player.y ) { // // проверяем чтобы не попало на игрока
            if ( player.y === config.rowsCount - 1 ) {
                this.y--;
            } else {
                this.y++;
            }
        }
    }
};
