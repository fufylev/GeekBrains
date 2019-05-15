"use strict";

/**
 * Форма входных данных и параметров
 * @type {{settings: {countSelector: string, priceSelector: string}, good: Array, countEl: null, priceEl: *}}
 */
const basket = {
  good: [],
  countEl: 0,
  priceEl: 0,
  goodName: null,
  goodPrice: 0,

  /**
   * Функция которая принимает данные от обработчика событий и присваивает новые данные параметрам
   * @param {Object} event - массив данный по товару на кнопку которого было нажато мышью
   * @param {string} good - название товара на кнопку которого было нажато мышью
   * @param {Number} priceEl - название товара на кнопку которого было нажато мышью
   */
  init(event) {
    // Записываем настройки, которые передал пользователь при срабатываании обработчика событий.
    this.good = [event.target.dataset.name];
    this.priceEl = parseInt(event.target.dataset.price);
    this.getGoodsPrice();
    this.render();
  },

  /**
   * отображает на экране пользователя кол-во всех товаров и их цену,
   * а такде какой товар был добавлен и его цену
   */
  render() {
    document.getElementById('basket-count').innerHTML = this.countEl;
    document.getElementById('basket-price').innerHTML = this.goodPrice;
    document.getElementById('basket-goodName').innerHTML = this.good;
    document.getElementById('basket-goodPrice').innerHTML = this.priceEl;
  },

  /**
   * Функция обрабатывает событие и привабляет к старым значениям новые
   */
  getGoodsPrice() {
    this.goodName = this.good;
    this.countEl = parseInt(this.countEl) + 1;
    this.goodPrice += parseInt(this.priceEl);
  },

  /**
   * вешаем обработчик на кнопки и передаем значение в метод
   */
  EventListener() {
    //вешаем обработчик на кнопки и передаем значение в метод
    let el = document.getElementsByClassName('buy-btn');
    console.log(`это содержимое элемента`, el);
    for (let elInner of el) {
      elInner.addEventListener("click", event => this.init(event));
    }
  },
};

