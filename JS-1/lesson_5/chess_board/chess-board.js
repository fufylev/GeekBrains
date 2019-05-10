"use strict";

const chessBoard = {
    settings,
    
    /**
     * массив с обозначением на доске по горизонтали
     */
    letters: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
    },
    
    /**
     * массив с обозначением на доске по вертикали
     */
    numbers: {
        1: 8,
        2: 7,
        3: 6,
        4: 5,
        5: 4,
        6: 3,
        7: 2,
        8: 1,
    },
    
    /**
     * Инициирует ячейки в игре.
     * @param {INT} row - текущее значение номера строки
     * @param {INT} col - текущее значение номера столбца
     */
    init() {
        // Ставим контейнер игры.
        let containerElement = document.getElementById( 'game' );
        
        // Пробегаемся в цикле столько раз, какое количество ячеек на доске.
        for ( let row = 0; row < this.settings.rowsCount; row++ ) {
            // Создаем новую строку.
            let trElem = document.createElement( 'tr' );
            // Добавляем строку в контейнер с игрой.
            containerElement.appendChild( trElem );
            // В каждой строке пробегаемся по циклу столько раз, сколько у нас колонок.
            for ( let col = 0; col < this.settings.colsCount; col++ ) {
                // Создаем ячейку.
                let cell = document.createElement( 'td' );
                // Добавляем ячейку в текущую строку.
                trElem.appendChild( cell );
    
                if ( row === 0 || row === 9 || col === 0 || col === 9 ) {
                    cell.classList.add( 'out-border' ); // ячейки вокруг игрового поля
                }
    
                if ( ( row === 0 && col > 0 && col < 9 )
                    || ( row === 9 && col > 0 && col < 9 ) ) {
                    cell.textContent = this.letters[ col ]; // соответ ячейки буква
                }
                if ( ( col === 0 && row > 0 && row < 9 )
                    || ( col === 9 && row > 0 && row < 9 ) ) {
                    cell.textContent = this.numbers[ row ]; // соот-щая ячейке цифра
                }
                if ( row > 0 && row < 9 && col > 0 && col < 9 ) {
                    cell.setAttribute( "data-info", this.letters[ col ] + this.numbers[ row ] );
                }
                
                // задаем чередование цветов на самой доске
                if ( this.isCellDark( row, col ) ) {
                    cell.classList.add( 'dark' );
                }
            }
        }
    },
    
    /**
     * Определяет является ли ячейка черной
     * @param row - номер строки
     * @param col- номер столбца
     * @returns {boolean} - true если ячейка черная
     */
    isCellDark( row, col ) {
        if ( row === 0 || row === 9 || col === 0 || col === 9 ) { // ячейки вокруг игрового поля
            return false;
        }
        return ( row % 2 === 1 && col % 2 === 0 ) || ( row % 2 === 0 && col % 2 === 1 );
    },
};
