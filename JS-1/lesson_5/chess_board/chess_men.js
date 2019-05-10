"use strict";

const chessMen = {
    /**
     * массив с объектами фигур, которые присутствуют на поле
     * Взято из ВИКИПЕДИИ
     * Каждый объект представляет собой фигуру на шахматной доске. У каждого объекта есть свойства:
     * @param {string} name - название фигуры, например 'p' - это pawn (с англ. пешка), 'N' - это knight
     * (с англ. рыцарь, конь (как фигура в шахматах)), 'Q' - это queen (с англ. королева) и т.д.
     * @param {string} color - цвет шахматной фигуры
     * @param {string} pos - текущие координаты шахматных фигур
     */
    chessPieces: [
        { name: 'c', color: 'w', pos: 'A1' },
        { name: 'h', color: 'w', pos: 'B1' },
        { name: 'o', color: 'w', pos: 'C1' },
        { name: 'q', color: 'w', pos: 'D1' },
        { name: 'k', color: 'w', pos: 'E1' },
        { name: 'o', color: 'w', pos: 'F1' },
        { name: 'h', color: 'w', pos: 'G1' },
        { name: 'c', color: 'w', pos: 'H1' },
        { name: 'p', color: 'w', pos: 'A2' },
        { name: 'p', color: 'w', pos: 'B2' },
        { name: 'p', color: 'w', pos: 'C2' },
        { name: 'p', color: 'w', pos: 'D2' },
        { name: 'p', color: 'w', pos: 'E2' },
        { name: 'p', color: 'w', pos: 'F2' },
        { name: 'p', color: 'w', pos: 'G2' },
        { name: 'p', color: 'w', pos: 'H2' },
        { name: 'c', color: 'b', pos: 'A8' },
        { name: 'h', color: 'b', pos: 'B8' },
        { name: 'o', color: 'b', pos: 'C8' },
        { name: 'q', color: 'b', pos: 'D8' },
        { name: 'k', color: 'b', pos: 'E8' },
        { name: 'o', color: 'b', pos: 'F8' },
        { name: 'h', color: 'b', pos: 'G8' },
        { name: 'c', color: 'b', pos: 'H8' },
        { name: 'p', color: 'b', pos: 'A7' },
        { name: 'p', color: 'b', pos: 'B7' },
        { name: 'p', color: 'b', pos: 'C7' },
        { name: 'p', color: 'b', pos: 'D7' },
        { name: 'p', color: 'b', pos: 'E7' },
        { name: 'p', color: 'b', pos: 'F7' },
        { name: 'p', color: 'b', pos: 'G7' },
        { name: 'p', color: 'b', pos: 'H7' },
    ],
    
    /**
     * ВЗЯТО ИЗ ВИКИПЕДИИ
     * массив с кодами шахматных фигур, которые будут отображены
     * на шахматной досске
     */
    chessPieceHtml: {
        cw: '&#9814;',
        hw: '&#9816;',
        ow: '&#9815;',
        kw: '&#9812;',
        qw: '&#9813;',
        pw: '&#9817;',
        cb: '&#9820;',
        hb: '&#9822;',
        ob: '&#9821;',
        kb: '&#9818;',
        qb: '&#9819;',
        pb: '&#9823;',
    },
    
    /**
     * функция прорисовывает шахматные фигуры на игровом поле в независимости
     * от их колическва. Координаты берутся из figures()
     **/
    renderFigure() {
        for ( let i = 0; i < 32; i++ ) {
            const chessPiece = this.chessPieces[ i ];
            //console.log( figure );
            document.querySelector( `[data-info="${ chessPiece.pos }"]` ).innerHTML =
                this.chessPieceHtml[ chessPiece.name + chessPiece.color ];
        }
    },
};