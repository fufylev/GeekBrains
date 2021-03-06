"use strict";

/**
 * Объект с настройками игры
 * @type {{col: number, wonNumber: number, row: number}}
 * @param box (INT) - кол-во рядов и столбцов
 * @param wonRequiredNumber (INT)- кол-во крестиков или ноликов надо набрать для выигрыша
 */
let settings = {
    box: 10, // кол-во рядов и столбцов
    wonRequiredNumber: 5 // числе не должно превышать box
};

/**
 * Объект игры
 * @type {{phase: string, renderMap(): void, init(): void, crossNulls(): void, fillCell(*): void, mapValues: Array, cellClickHandler(*=): (undefined), togglePhase(): void, sayWonPhrase(): void, crosses: string, zeros: string, setStatusStopped(): void, gameTableElement: HTMLElement, isCorrectClick(*=): *, isStatusPlaying(): *, isCellEmpty(*): *, hasWon(): boolean, initEventHandlers(): void, isClickByCell(*): *, status: string}}
 * @param crosses (string) - строка с необходимым кол-вом крестиков
 * @param zeros (string) - строка с необходимым кол-вом ноликов
 */
let ticTakToe = {
    gameTableElement: document.getElementById( 'game' ),
    mapValues: [],
    phase: 'X',
    status: 'playing',
    crosses: '',
    zeros: '',
    
    init() {
        this.crossesZerosFill(); // NEW
        this.renderMap();
        this.initEventHandlers();
    },
    
    /**
     * NEW
     * метод наполнения переменных crosses и zeros крестиками и нулями
     * в зависиости от переменной wonRequiredNumber
     */
    crossesZerosFill() {
        
        for ( let i = 0; i < settings.wonRequiredNumber; i++ ) {
            this.crosses += 'X';
            this.zeros += '0';
        }
        console.log( this.crosses, this.zeros );
    },
    
    renderMap() {
        // показываем сколько надо набрать баллов
        let conditions = `<div class="conditions">Для победы надо набрать
                            <span class="number">${ settings.wonRequiredNumber }</span>
                            крестиков или ноликов</div>`;
        this.gameTableElement.insertAdjacentHTML( 'beforebegin', conditions );
        
        for ( let row = 0; row < settings.box; row++ ) {
            // Создаем линию.
            const tr = document.createElement( 'tr' );
            // Добавляем линию в таблицу.
            this.gameTableElement.appendChild( tr );
            //добавляем многомерности массиву
            this.mapValues[ row ] = [];
            // Пробегаемся по всем колонкам.
            for ( let col = 0; col < settings.box; col++ ) {
                // Создаем колонку.
                let td = document.createElement( 'td' );
                // Добавляем в data-аттрибуты данные с номерами этой ячейки.
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                
                // наполняем mapValues
                this.mapValues[ row ][ col ] = '';
                
                // Добавляем колонку в линию.
                tr.appendChild( td );
            }
        }
    },
    initEventHandlers() {
        this.gameTableElement.addEventListener( 'click', event => this.cellClickHandler( event ) );
    },
    
    cellClickHandler( event ) {
        if ( !this.isCorrectClick( event ) ) {
            return;
        }
        this.fillCell( event );
        
        if ( this.hasWon() ) {
            this.setStatusStopped();
            this.sayWonPhrase();
        }
        
        this.togglePhase();
    },
    
    sayWonPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert( `${ figure } выиграли!` );
    },
    
    setStatusStopped() {
        this.status = 'stopped';
    },
    
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    },
    
    fillCell( event ) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        
        this.mapValues[ row ][ col ] = this.phase;
        event.target.textContent = this.phase;
    },
    
    isCorrectClick( event ) {
        return this.isStatusPlaying( event ) && this.isClickByCell( event ) && this.isCellEmpty( event );
    },
    
    isStatusPlaying() {
        return this.status === 'playing';
    },
    
    isClickByCell( event ) {
        return event.target.tagName === 'TD';
    },
    
    isCellEmpty( event ) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        
        return this.mapValues[ row ][ col ] === '';
    },
    
    /**
     * Переделал под размер settings.box
     * @returns {boolean}
     */
    hasWon() {
        let cumulativeByAllDirections = [ '', '', '', '', '', '' ];
        let ifValueIsInArr = false;
        let out = this;
        
        // текущий цикл для проверки по горизонтали и вертикали и всем 4м диагонялям
        for ( let i = 0; i < settings.box; i++ ) {
            // по вертикали и горизонтали
            for ( let j = 0; j < settings.box; j++ ) {
                cumulativeByAllDirections[ 0 ] += this.mapValues[ i ][ j ];
                cumulativeByAllDirections[ 1 ] += this.mapValues[ j ][ i ];
            }
            // по диагоняли со всех 4-х углов
            let x = i, y = 0; // дополнительные переменные
            for ( let j = 0; j <= i; j++ ) {
                cumulativeByAllDirections[ 2 ] += this.mapValues[ x ][ y ];
                cumulativeByAllDirections[ 3 ] += this.mapValues[ x ][ settings.box - 1 - y ];
                cumulativeByAllDirections[ 4 ] += this.mapValues[ settings.box - 1 - x ][ settings.box - 1 - y ];
                cumulativeByAllDirections[ 5 ] += this.mapValues[ settings.box - 1 - x ][ y ];
                x--;
                y++;
            }
            //перебираем получивший массив на соответствие crosses или zeros
            cumulativeByAllDirections.forEach(function(element) {
                if ( ~element.indexOf( out.crosses ) ||
                  ~element.indexOf( out.zeros ) ) {
                    ifValueIsInArr = true;
                }
            });
            
            // возвращаем TRUE если ifValueIsInArr === true
            if ( ifValueIsInArr ) {
                return true
            } else { // очищаем массив
                cumulativeByAllDirections = [ '', '', '', '', '', '' ]
            }
        }
        // возвращаем FALSE если ifValueIsInArr === false
        return false;
    },
};

window.addEventListener( 'onload', ticTakToe.init() );

