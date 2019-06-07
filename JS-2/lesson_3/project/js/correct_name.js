/**
 * добавил класс со статическим методом для правильного вывода окончания слова при разном кол-ве
 * @param value - какое число обрабатываем
 * @param words - массив слов которые надо обработать
 * @returns {*} - возвращаем слово с правильным окончанием
 */
class CorrectEndOfWord {
    static operation( value, words ) {
        let cases = [ 2, 0, 1, 1, 1, 2 ];
        return words[ ( value % 100 > 4 && value % 100 < 20 ) ? 2 : cases[ ( value % 10 < 5 ) ? value % 10 : 5 ] ];
    }
}