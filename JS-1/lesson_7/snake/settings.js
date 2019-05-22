"use strict";
const MAX_MAP_SIZE = 30;
const MIN_MAP_SIZE = 10;
const MAX_SPEED_SIZE = 10;
const MIN_SPEED_SIZE = 1;
const MAX_WIN_SIZE = 50;
const MIN_WIN_SIZE = 5;

let settings = {
    rowsCount: 21,
    colsCount: 21,
    speed: 2,
    winLength: 50,
    
    validate() {
        if ( this.rowsCount < MIN_MAP_SIZE || this.rowsCount > MAX_MAP_SIZE ) {
            console.error( 'Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].' );
            return false;
        }
        
        if ( this.colsCount < MIN_MAP_SIZE || this.colsCount > MAX_MAP_SIZE ) {
            console.error( 'Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].' );
            return false;
        }
        
        if ( this.speed < MIN_SPEED_SIZE || this.speed > MAX_SPEED_SIZE ) {
            console.error( 'Неверные настройки, значение speed должно быть в диапазоне [1, 10].' );
            return false;
        }
        
        if ( this.winLength < MIN_WIN_SIZE || this.winLength > MAX_WIN_SIZE ) {
            console.error( 'Неверные настройки, значение winLength должно быть в диапазоне [5, 50].' );
            return false;
        }
        
        return true;
    }
};
