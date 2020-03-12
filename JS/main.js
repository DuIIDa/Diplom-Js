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

    //Кнопка больше
    const addsentence = () => {
        const stocks = document.querySelector('#stocks');
        const product = document.querySelectorAll('.col-xs-12.col-sm-6.col-md-4');

        stocks.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList[1] === 'add-sentence-btn'){
                target.style.display = 'none';
                product.forEach(item => {
                    item.classList.remove('hidden');
                    item.classList.remove('visible-sm-block');
                });
            }
        });
    };

    addsentence();
});