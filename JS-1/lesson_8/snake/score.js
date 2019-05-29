"use strict";

const score = {
  count: 0,
  scoreContEl: document.getElementById( 'count' ),
  
  /**
   *увеличивает счетчик на +1
   */
  increment() {
    this.count++;
    this.render();
  },
  
  /**
   * отображает значение счетчика на экране пользователя
   */
  render() {
    this.scoreContEl.innerHTML = this.count;
  },
  
  /**
   * Обнуляет счетчик и выводит пользователю НОЛЬ
   */
  eraser() {
    this.count = 0;
    this.render();
  },
};