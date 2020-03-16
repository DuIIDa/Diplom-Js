'use strict';

import animModel from './animModel';
import closeModel from './closeModel';

const addsentence = () => {
    const stocks = document.querySelector('#stocks');
    const product = document.querySelectorAll('.col-xs-12.col-sm-6.col-md-4');

    const popupDiscount = document.querySelector('.popup-discount');
    const formParametrs = document.querySelectorAll('.form-parametrs');
    const discountContent = document.querySelectorAll('.popup-content');

    stocks.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList[1] === 'add-sentence-btn'){
            target.style.display = 'none';
            product.forEach(item => {
                item.classList.remove('hidden');
                item.classList.remove('visible-sm-block');
            });
        } else if(target.classList[0] === 'discount-btn'){
            event.preventDefault();
            formParametrs[0].id = '';
            animModel(popupDiscount, discountContent[1]);
        }
    });

    popupDiscount.addEventListener('click', (event) => {
        let target = event.target;
        closeModel(popupDiscount,target,event);
    });
};

export default addsentence;