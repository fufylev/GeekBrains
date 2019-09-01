'use strict';

class Developer {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    printName() {
        console.log(this.firstName, this.secondName);
    }
}

module.exports = Developer;