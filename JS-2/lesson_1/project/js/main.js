const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 30},
    {id: 3, title: 'Keyboard', price: 55},
    {id: 4, title: 'Gamepad', price: 65},
    {id: 5, title: 'Processor', price: 165},
    {id: 6, title: 'Mather Board', price: 95},
    {id: 7, title: 'SSD disk', price: 100},
    {id: 8, title: 'Memory Stick', price: 47},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p class="price">$${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML =
      list.map(item => renderProduct(item.title, item.price)).join('');
};
/*
шаблоны литералов используют метод toString(), который по умолчанию присоединяет возвращенный массив map с помощью ','.
Чтобы избежать этой "проблемы", вы нужно использовать join('') */

renderPage(products);