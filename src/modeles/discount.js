'use strict';


import animModel from './animModel';
import closeModel from './closeModel';

const  discount = () => {
    const checkBtn = document.querySelector('.check-btn');
    const popupCheck = document.querySelector('.popup-check');
    const discountContent = document.querySelectorAll('.popup-content');

    checkBtn.addEventListener('click', () => {
        event.preventDefault();
        animModel(popupCheck, discountContent[2]);
    });

    popupCheck.addEventListener('click', (event) => {
        let target = event.target;
        closeModel(popupCheck,target,event);
    });
};

export default discount;