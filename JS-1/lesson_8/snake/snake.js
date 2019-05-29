"use strict";
let snake = {
  body: null,
  direction: null,
  lastStepDirection: null,
  maxByX: null,
  maxByY: null,
  
  init( startPoint, direction, maxByX, maxByY ) {
    this.body = [ startPoint ];
    this.direction = direction;
    this.lastStepDirection = direction;
    this.maxByX = maxByX;
    this.maxByY = maxByY;
  },
  
  /**
   * Отдает точку, где будет голова змейки если она сделает шаг.
   * @returns {{x: int, y: int}} Следующая точка куда придет змейка сделав шаг.
   */
  getNextStepHeadPoint() {
    let firstPoint = this.body[ 0 ];
    // переделываем данный switch
    switch ( this.direction ) {
      case 'up':
        return {
          x: firstPoint.x,
          y: firstPoint.y === 0 ? this.maxByY : firstPoint.y - 1 };
      case 'down':
        return {
          x: firstPoint.x,
          y: firstPoint.y === this.maxByY ? 0 : firstPoint.y + 1 };
      case 'right':
        return {
          x: firstPoint.x === this.maxByX ? 0 : firstPoint.x + 1,
          y: firstPoint.y };
      case 'left' :
        return {
          x: firstPoint.x === 0 ? this.maxByX : firstPoint.x - 1,
          y: firstPoint.y };
    }
  },
  
  makeStep() {
    //[{x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]
    
    //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]
    
    //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}]
    this.lastStepDirection = this.direction;
    this.body.unshift( this.getNextStepHeadPoint() );
    this.body.pop();
  },
  
  incrementBody() {
    let lastBodyIdx = this.body.length - 1;
    let lastBodyPoint = this.body[ lastBodyIdx ];
    let lastBodyPointClone = Object.assign( {}, lastBodyPoint );
    this.body.push( lastBodyPointClone );
  },
  
  setDirection( direction ) {
    this.direction = direction;
  },
  /**
   * Проверяет содержит ли змейка переданную точку.
   * @param {{x: int, y: int}} point Точка, которую проверяем.
   * @returns {boolean} true, если змейка содержит переданную точку, иначе false.
   */
  isBodyPoint( point ) {
    return this.body.some( snakePoint => snakePoint.x === point.x && snakePoint.y === point.y );
  },
};
