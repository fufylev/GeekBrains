let pow = (x, n) => {
    if(x < 0 || n < 0){
        return null
    }
    return x ** n
};

module.exports = pow;