"use strict";

let food = {
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
};
