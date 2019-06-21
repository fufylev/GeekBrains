let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

let remove = (cart, req) => {
    let find = cart.contents.find(el => +el.id_product === req.body.id_product);
    let cartContent = cart.contents;
    cartContent.splice(cartContent.indexOf(find), 1);
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove
};