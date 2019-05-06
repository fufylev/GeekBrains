/**
 * Объект, отвечающий за перемещение
 * @type {{getDirection(): (null|*|undefined), getNextPosition(*): *}}
 */
let mover = {
    
    // JSDOC
    /**
     * Метод для получение направления
     * @returns {direction - направление, которое может быть 2, 4...}
     */
    getDirection() {
        
        const availableDirections = [ 1, 2, 3, 4, 6, 7, 8, 9 ];
        
        while ( true ) {
            let direction = parseInt( prompt( 'Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.' ) );
            
            if ( isNaN( direction ) ) {
                return null;
            }
            
            if ( !availableDirections.includes( direction ) ) {
                alert( 'Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9' );
                continue;
            }
            
            return direction;
        }
    },
    
    /**
     * Метод определения следуюшей координаты игрока
     * @param direction - направление движения
     * @returns {{x: (number|*), y: (number|*)}} - координата
     */
    getNextPosition( direction ) {
        let nextPosition = {
            x: player.x,
            y: player.y
        };
        
        switch ( direction ) {
            case 8: // У МЕНЯ ДРУГАЯ РАСКЛАДКА ЦИФР НА КЛАВЕ - "8" ЭТО ВВЕРХ
                nextPosition.y--;
                break;
            case 2: // У МЕНЯ ДРУГАЯ РАСКЛАДКА ЦИФР НА КЛАВЕ - "2" ЭТО ВНИЗ
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        
        return this.checkOutOfBorder( nextPosition );
    },
    
    /**
     * метод переопределения позиции игрока если он вышел за предела игрового поля по всем координатам.
     * Игрок не ограничен рамками а просто выходит с другой стороны поля
     * @param nextPosition - текущаяя координата
     * @returns {{x: (number|*), y: (number|*)}} - координата
     */
    checkOutOfBorder( nextPosition ) {
        
        if ( nextPosition.x < 0 ) {
            nextPosition.x = 9
        }
        if ( nextPosition.x > 9 ) {
            nextPosition.x = 0
        }
        if ( nextPosition.y < 0 ) {
            nextPosition.y = 9
        }
        if ( nextPosition.y > 9 ) {
            nextPosition.y = 0
        }
        
        return nextPosition;
    }
};

