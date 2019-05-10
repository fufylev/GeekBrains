/**
 * Объект логики передвижения игрока
 * @type {{getNewPosition(*): (*|*|*|*|*), makeStep(*=): (undefined), canPlayerMakeStep(*=): *, arePositionsEqual(*, *): *}}
 */
let mover = {
    
    /**
     * Метод обработки события нажатия на клавишу
     * @param event
     */
    makeStep( event ) {
        let newPosition = this.getNewPosition( event );
        
        if ( !this.canPlayerMakeStep( newPosition ) ) {
            return;
        }
        
        if ( this.arePositionsEqual( player, newPosition ) ) {
            return;
        }
        
        renderer.clearUserPosition();
        player.changePosition( newPosition );
        renderer.renderUserPosition( newPosition );
    },
    
    /**
     * метод определения новой позиции игрока после нажатия на клавишу
     * @param event
     * @returns {{x: number, y: (number|int)}|{x: (number|int), y: (number|int)}|{x: *, y: (number|int)}|{x: (number|int), y: *}|{x: (number|int), y: number}}
     */
    getNewPosition( event ) {
        switch ( event.key ) {
            case 'ArrowUp':
                return { x: player.x, y: player.y - 1 };
            case 'ArrowDown':
                return { x: player.x, y: player.y + 1 };
            case 'ArrowRight':
                return { x: player.x + 1, y: player.y };
            case 'ArrowLeft':
                return { x: player.x - 1, y: player.y };
            default:
                return { x: player.x, y: player.y };
        }
    },
    
    /**
     * метод определения вышел ли игрок за пределы игрового поля путем определения существования HTML элемента с текущими координатами
     * @param nextPoint
     * @returns {boolean} - вернет ложь если нет такой ячейки
     */
    canPlayerMakeStep( nextPoint ) {
        if ( nextPoint.x === obstacle.x && nextPoint.y === obstacle.y ) {
            return false;
        }
        return renderer.getSquare( nextPoint ) !== null;
    },
    
    /**
     * Метод проверки на совпадение текущей и следующей позиции игрока
     * @param curPos
     * @param newPos
     * @returns {boolean}
     */
    arePositionsEqual( curPos, newPos ) {
        return curPos.x == newPos.x && curPos.y == newPos.y;
    }
};
