window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //popup--1
    const popupOne = () => {
        const callBtn = document.querySelectorAll('a.call-btn');
        const popupCall = document.querySelector('.popup-call');
        const captureContent = document.querySelector('.popup-content');

        const addPopup = () => {
            let count = 100;
            popupCall.style.display = 'block';
            captureContent.style.top = '100%';

            let id = setInterval(()=>{
                count--;
                captureContent.style.top = count+"%";
                if(count === 20){
                    clearInterval(id);
                }
            }, 5);
        };

        popupCall.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            console.log('target: ', target);
            if(target.className === 'popup-close'){
                popupCall.style.display = 'none';
            }else {
                target = target.closest('.popup-content');

                if(!target){
                    popupCall.style.display = 'none';
                }

            }
        });

        callBtn.forEach(item => {
            item.addEventListener('click', addPopup);
        });
    };
    popupOne();

});