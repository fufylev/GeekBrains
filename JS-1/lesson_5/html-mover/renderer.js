/**
 * Функция отрисовки доски
 * @type {{getSquare(*): *, renderBoard(): void, clearUserPosition(): void, renderUserPosition(*=): void, generateBoard(): string}}
 */
let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML( 'afterbegin', result );
        this.renderUserPosition( player );
        obstacle.getObstacle();
        this.obstaclePosition();
    },
    
    /**
     * Метод отрисовки игрового поля
     * @returns {string} - готовый HTML код ввиде таблицы
     */
    generateBoard() {
        let board = '';
        for ( let y = 0; y < config.rowsCount; y++ ) {
            board += '<tr>';
            for ( let x = 0; x < config.colsCount; x++ ) {
                board += `<td data-x="${ x }" data-y="${ y }"></td>`;
            }
            board += "</tr>";
        }
        return `<table><tbody>${ board }</tbody></table>`;
    },
    
    
    /**
     * Метод добавления класса ячейки на которой стоит игрок
     * @param position
     */
    renderUserPosition( position ) {
        let square = this.getSquare( position );
        square.classList.add( 'user' );
    },
    
    obstaclePosition() {
        let square = this.getSquare( obstacle );
        square.classList.add( 'obstacle' );
    },
    
    /**
     * метод получения HTML элемента по текущей координате
     * @param position - текущая координата
     * @returns {Element} - элемент с текущей координатой ввиде <td data-x="0" data-y="0" class="user"></td>
     */
    getSquare( position ) {
        //console.log(document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`));
        return document.querySelector( `[data-x="${ position.x }"][data-y="${ position.y }"]` );
    },
    
    /**
     * Метод удаления класса у ячейки на которой до этого был игрок
     */
    clearUserPosition() {
        document.querySelector( ".user" ).classList.remove( "user" );
    }
};