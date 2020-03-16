'use strict';

import animModel from './animModel';
import closeModel from './closeModel';

const popupOne = () => {
    const callBtn = document.querySelectorAll('a.call-btn');
    const popupCall = document.querySelector('.popup-call');
    const captureContent = document.querySelectorAll('.popup-content');

    popupCall.addEventListener('click', (event) => {
        let target = event.target;
        closeModel(popupCall,target, event);
    });

    callBtn.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            animModel(popupCall,captureContent[0]);
        });
    });
};

export default popupOne;