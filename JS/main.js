window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Анимация модалки
    const animModel = (block, content) => {
        let count = 100;
        block.style.display = 'block';
        content.style.top = '100%';

        let id = setInterval(()=>{
            count--;
            content.style.top = count+"%";
            if(count === 20){
                clearInterval(id);
            }
        }, 5);
    };

    //Закрытие модалок
    const closeModel = (block, target) => {
        if(target.className === 'popup-close'){
            block.style.display = 'none';
        }else {
            target = target.closest('.popup-content');

            if(!target){
                block.style.display = 'none';
            }
        }
    };


    //popup--1
    const popupOne = () => {
        const callBtn = document.querySelectorAll('a.call-btn');
        const popupCall = document.querySelector('.popup-call');
        const captureContent = document.querySelectorAll('.popup-content');

        popupCall.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            closeModel(popupCall,target);
        });

        callBtn.forEach(item => {
            item.addEventListener('click', () => {
                animModel(popupCall,captureContent[0]);
            });
        });
    };
    popupOne();

    //Кнопка больше + модалка 2
    const addsentence = () => {
        const stocks = document.querySelector('#stocks');
        const product = document.querySelectorAll('.col-xs-12.col-sm-6.col-md-4');

        const popupDiscount = document.querySelector('.popup-discount');
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
                animModel(popupDiscount, discountContent[1]);
            }
        });

        popupDiscount.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            closeModel(popupDiscount,target);
        });
    };

    addsentence();

    //Скидка
    const  discount = () => {
        const checkBtn = document.querySelector('.check-btn');
        const popupCheck = document.querySelector('.popup-check');
        const discountContent = document.querySelectorAll('.popup-content');

        checkBtn.addEventListener('click', () => {
            animModel(popupCheck, discountContent[2]);
        });

        popupCheck.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            closeModel(popupCheck,target);
        });
    };

    discount();

    //Консультация
    const сonsultation = () => {
        const consultationBtn = document.querySelector('.consultation-btn');
        const popupConsultation = document.querySelector('.popup-consultation');
        const discountContent = document.querySelectorAll('.popup-content');

        consultationBtn.addEventListener('click', (event) => {
            event.preventDefault();
            animModel(popupConsultation, discountContent[3]);
        });
        
        popupConsultation.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            closeModel(popupConsultation,target);
        });

    };

    сonsultation();

    //Аккордеон

    const accordion = () => {
        const accordionTwo = document.querySelector('#accordion-two');
        const collapseOneTwo = document.querySelector('#collapseOne-two');
        console.log('collapseOneTwo: ', collapseOneTwo);
        const collapseTwoTwo = document.querySelector('#collapseTwo-two');
        const collapseThreeTwo = document.querySelector('#collapseThree-two');

        accordionTwo.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if(target.tagName === 'A'){
                console.log('target: ', target.id);

                if(target.id === 'One'){
                    collapseTwoTwo.classList.remove('in');
                    collapseThreeTwo.classList.remove('in');
                    collapseOneTwo.classList.add('in');
                }else if(target.id === 'Two'){
                    collapseOneTwo.classList.remove('in');
                    collapseThreeTwo.classList.remove('in');
                    collapseTwoTwo.classList.add('in');
                }else if(target.id === 'Three'){
                    collapseOneTwo.classList.remove('in');
                    collapseTwoTwo.classList.remove('in');
                    collapseThreeTwo.classList.add('in');
                }
            }
        });
    };

    accordion();
});