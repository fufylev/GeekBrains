"use strict";

/**
 * Объект содержащий методы для валидации.
 */
const validationMethods = {
    /**
     * Метод проверяет на валидность имя пользователя
     * @param name - имя пользователя
     * @return {*} - возвращает "null" если TRUE, и возвращает сообщение об ошибке если FALSE
     */
    nameValid( name ) {
        console.log( name.value );
        let message = null;
        let re = /^[a-zA-Zа-яА-ЯёЁ]+$/;
        let valid = re.test( name.value );
        console.log( valid );
        if ( !valid ) {
            message = 'Имя введено не правильно! Имя должно содержать только буквы!';
        }
        return message;
    },
    
    /**
     * Метод проверяет на валидность телефон пользователя
     * @param tel - телефон пользователя
     * @return {*} - возвращает "null" если TRUE, и возвращает сообщение об ошибке если FALSE
     */
    telNumberValid( tel ) {
        console.log( tel.value );
        let message = null;
        let re = /^\+[\d]{1}\([\d]{3}\)[\d]{3}-[\d]{4}$/;
        let valid = re.test( tel.value );
        console.log( valid );
        if ( !valid ) {
            message = 'Телефон введен не правильно! Введите в формате +7(000)000-0000';
        }
        return message;
    },
    
    /**
     * Метод проверяет на валидность email пользователя
     * @param email - телефон пользователя
     * @return {*} - возвращает "null" если TRUE, и возвращает сообщение об ошибке если FALSE
     */
    emailValid( email ) {
        console.log( email.value );
        let message = null;
        let re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z0-9]+$/;
        let valid = re.test( email.value );
        console.log( valid );
        if ( !valid ) {
            message = 'Адрес электронной почты введен не правильно!';
        }
        return message;
    },
    
    /**
     * Метод проверяет на валидность поле "ТЕКСТ"
     * @param text - телефон пользователя
     * @return {*} - возвращает "null" если поле заполнено, и возвращает сообщение об ошибке если осталось пустым
     */
    textValid( text ) {
        console.log( text.value );
        let message = null;
        if ( text.value === "" ) {
            message = 'Поле не должно быть пустым!';
        }
        return message;
    }
    
};

const form = {
    formEl: null,
    rules: null,
    
    /**
     * Инициализирует форму,ставим обработчик события и правила проверки.
     */
    init() {
        this.formEl = document.querySelector( '.my-form' );
        this.formEl.addEventListener( 'submit', e => this.formSubmit( e ) );
        
        // Ставим все правила для проверки формы.
        this.rules = [
            {
                selector: 'input[name="name"]',
                methods: [
                    { name: 'nameValid' }
                ],
            },
            {
                selector: 'input[name="phone"]',
                methods: [
                    { name: 'telNumberValid' }
                ],
            },
            {
                selector: 'input[name="email"]',
                methods: [
                    { name: 'emailValid' }
                ],
            },
            {
                selector: 'input[name="text"]',
                methods: [
                    { name: 'textValid' },
                ],
            },
        ];
    },
    
    
    /**
     * Метод, который запускается перед отправкой формы.
     * @param {Event} e Событие отправки формы.
     */
    formSubmit( e ) {
        if ( !this.validate() ) {
            e.preventDefault();
        }
    },
    
    /**
     * Валидирует форму.
     */
    validate() {
        // Изначально считаем что валидация успешна, если кто-то провалит, то поставим false.
        let isValid = true;
        // Перебираем все правила.
        for ( let rule of this.rules ) {
            // Получаем элемент, который проверяем.
            const inputEl = document.querySelector( rule.selector );
            // Перебираем все методы, по которым надо провалидировать поле.
            for ( let method of rule.methods ) {
                // Получаем ошибку после выполнения метода.
                const errMessage = validationMethods[ method.name ]( inputEl );
                console.log( errMessage );
                if ( errMessage ) {
                    // Если ошибка была, то меняем стили поля на не прошедшее валидацию.
                    this.setInvalidField( inputEl, errMessage );
                    // Ставим флаг что валидация провалилась в форме.
                    isValid = false;
                    // Больше не нужно проверять поле, если одну ошибку у поля уже получили.
                    break;
                } else {
                    // Если сообщения об ошибке не было, значит валидация пройдена.
                    this.setValidField( inputEl );
                }
            }
        }
        
        // Возвращаем общий результат формы, была пройдена валидация всеми или нет.
        return isValid;
    },
    
    /**
     * Устанавливает класс провала валидации инпуту и ставит сообщение о том, почему валидация провалена.
     * @param {Element} inputEl Элемент инпута, который провалил валидацию.
     * @param {string} message Сообщение об ошибке.
     */
    setInvalidField( inputEl, message ) {
        // Ставим is-invalid класс и убираем is-valid у инпута.
        const cl = inputEl.classList;
        cl.remove( 'is-valid' );
        cl.add( 'is-invalid' );
        
        // Если не стояло уже сообщения об ошибке, то создаем и вставляем переданное сообщение как текст.
        let hintWrap = inputEl.parentNode.querySelector( '.invalid-feedback' );
        if ( !hintWrap ) {
            hintWrap = document.createElement( 'div' );
            hintWrap.classList.add( 'invalid-feedback' );
            inputEl.parentNode.appendChild( hintWrap );
        }
        
        hintWrap.textContent = message;
    },
    
    /**
     * Устанавливает класс прохождения валидации инпуту и убирает сообщение о провале валидации, если такое было.
     * @param {Element} inputEl
     */
    setValidField( inputEl ) {
        // Ставим is-valid класс и убираем is-invalid у инпута.
        const cl = inputEl.classList;
        cl.remove( 'is-invalid' );
        cl.add( 'is-valid' );
    },
};


// Инициализируем форму.
form.init();