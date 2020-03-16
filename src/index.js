
    'use strict';

    import 'nodelist-foreach-polyfill';
    import "@babel/polyfill";
    import "formdata-polyfill";
    import 'es6-promise';
    import 'fetch-polyfill';
    import elementClosest from 'element-closest';
    elementClosest(window);

    import popupOne from './modeles/popupOne';
    import addsentence from './modeles/addsentence';
    import discount from './modeles/discount';
    import сonsultation from './modeles/сonsultation';
    import accordion from './modeles/accordion';
    import accordionCalc from './modeles/accordionCalc';
    import sendForm from './modeles/sendForm';
    


    //Global
    
    //Анимация модалки

    //Закрытие модалок

    //popup--1
    popupOne();

    //Кнопка больше + модалка 2
    addsentence();

    //Скидка
    discount();

    //Консультация
    сonsultation();

    //Аккордеон
    accordion();

    //Аккордеон-калькулятор
    accordionCalc();

    //Оправка форм + валидация
    sendForm();
