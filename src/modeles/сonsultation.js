'use strict';


import animModel from './animModel';
import closeModel from './closeModel';

const сonsultation = () => {
    const directoBtn = document.querySelector('.director-btn');
    const popupConsultation = document.querySelector('.popup-consultation');
    const discountContent = document.querySelectorAll('.popup-content');

    directoBtn.addEventListener('click', (event) => {
        event.preventDefault();
        animModel(popupConsultation, discountContent[3]);
    });

    popupConsultation.addEventListener('click', (event) => {
        let target = event.target;
        closeModel(popupConsultation,target,event);
    });

};

export default сonsultation;