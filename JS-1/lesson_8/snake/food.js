"use strict";

/*let food = {
  x: null,
  y: null,
  
  setFoodCoordinates( point ) {
    this.x = point.x;
    this.y = point.y;
  },
  
  getFoodCoordinates() {
    return { x: this.x, y: this.y };
  },
  
  isFoodPoint( point ) {
    return this.x === point.x && this.y === point.y;
  }
};*/

function foodModule() {
  let x = null;
  let y = null;
  function setFoodCoordinates( point ) {
    x = point.x;
    y = point.y;
  }
  function getFoodCoordinates() {
    return { x: x, y: y };
  }
  function isFoodPoint( point ) {
    return x === point.x && y === point.y;
  }
  return {
    setFoodCoordinates: setFoodCoordinates,
    getFoodCoordinates: getFoodCoordinates,
    isFoodPoint: isFoodPoint
  }
}
let food = foodModule();