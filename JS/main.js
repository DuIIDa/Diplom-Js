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
    const closeModel = (block, target, event) => {
        if(target.className === 'popup-close'){
            event.preventDefault();
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
        const collapseTwoTwo = document.querySelector('#collapseTwo-two');
        const collapseThreeTwo = document.querySelector('#collapseThree-two');

        accordionTwo.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if(target.tagName === 'A'){
                if(target.id === 'One-two'){
                    collapseTwoTwo.classList.remove('in');
                    collapseThreeTwo.classList.remove('in');
                    collapseOneTwo.classList.add('in');
                }else if(target.id === 'Two-two'){
                    collapseOneTwo.classList.remove('in');
                    collapseThreeTwo.classList.remove('in');
                    collapseTwoTwo.classList.add('in');
                }else if(target.id === 'Three-two'){
                    collapseOneTwo.classList.remove('in');
                    collapseTwoTwo.classList.remove('in');
                    collapseThreeTwo.classList.add('in');
                }
            }
        });
    };

    accordion();

    //Аккордеон-калькулятор

    const accordionCalc = () => {
        const panelGroup = document.querySelector('.panel-group');
        const constructBtn = document.querySelectorAll('.construct-btn');
        const popupDiscount = document.querySelector('.popup-discount');
        const discountContent = document.querySelectorAll('.popup-content');

        const collapseOne = document.querySelector('#collapseOne');
        const collapseTwo = document.querySelector('#collapseTwo');
        const collapseThree = document.querySelector('#collapseThree');
        const collapseFour = document.querySelector('#collapseFour');

        const myonoffswitch = document.querySelector('#myonoffswitch');//.checked
        const distance = document.getElementById('distance');
        const calcResult = document.querySelector('#calc-result');

        const parametersFormSubmission = {
            type: 'Однокамерны',
            fosterDiameter: '1.4 метра',
            fosterCount: '1 штука',
            drainageDiameter: '',
            drainageCount: '',
            bottom: 'Есть',
            distance: '0 Метров',
            rez: '',
        };

        
        const parametersСounting = {
            type: 10000,
            fosterDiameter: 0,
            fosterCount: 0,
            drainageDiameter: 0,
            drainageCount: 0,
            bottom: 2000,
            distance: 0,
        };

        const sumResult = () => {
            let type = parametersСounting.type;
            let fosterDiameter = parametersСounting.type * parametersСounting.fosterDiameter;
            let fosterCount = parametersСounting.type * parametersСounting.fosterCount;
            let drainageDiameter = parametersСounting.type * parametersСounting.drainageDiameter;
            let drainageCount = parametersСounting.type * parametersСounting.drainageCount;
            let bottom = parametersСounting.bottom;

            return type + fosterDiameter + fosterCount + 
            drainageDiameter + drainageCount + bottom;
        };

        const drainage = () => {
            const drainageCol = document.getElementById('drainage');

            if(myonoffswitch.checked === true){
                drainageCol.style.display = 'none';
            }else{
                drainageCol.style.display = 'block';
            }
        };

        panelGroup.addEventListener('change', (event) => {
            let target = event.target;
            if(target.id === 'myonoffswitch'){
                if(target.checked === true){
                    parametersСounting.drainageDiameter = 0;
                    parametersСounting.drainageCount = 0;
                    parametersСounting.type = 10000;
                    parametersFormSubmission.type = 'Однокамерный';
                    drainage();
                }else{
                    parametersСounting.drainageDiameter = 0;
                    parametersСounting.drainageCount = 0;
                    parametersСounting.type = 15000;
                    parametersFormSubmission.type = 'Двухкамерный';
                    drainage();
                }
            }else if(target.className === 'form-control expand'){
                if(target.id === 'diam-one' && target.value === '1.4 метра'){
                    parametersСounting.fosterDiameter = 0;
                    parametersFormSubmission.fosterDiameter = target.value;
                }else if(target.id === 'diam-one' && target.value === '2 метра'){
                    parametersСounting.fosterDiameter = 0.2;
                    parametersFormSubmission.fosterDiameter = target.value;
                }else if(target.id === 'count-one' && target.value === '1 штука'){
                    parametersСounting.fosterCount = 0;
                    parametersFormSubmission.fosterCount = target.value;
                }else if(target.id === 'count-one' && target.value === '2 штуки'){
                    parametersСounting.fosterCount = 0.3;
                    parametersFormSubmission.fosterCount = target.value;
                }else if(target.id === 'count-one' && target.value === '3 штуки'){
                    parametersСounting.fosterCount = 0.5;
                    parametersFormSubmission.fosterCount = target.value;
                }

                if(target.id === 'diam-two' && target.value === '1.4 метра'){
                    parametersСounting. drainageDiameter = 0;
                    parametersFormSubmission.drainageDiameter = target.value;
                }else if(target.id === 'diam-two' && target.value === '2 метра'){
                    parametersСounting. drainageDiameter = 0.2;
                    parametersFormSubmission.drainageDiameter = target.value;
                }else if(target.id === 'count-two' && target.value === '1 штука'){
                    parametersСounting.drainageCount = 0;
                    parametersFormSubmission.drainageCount = target.value;
                }else if(target.id === 'count-two' && target.value === '2 штуки'){
                    parametersСounting.drainageCount = 0.3;
                    parametersFormSubmission.drainageCount = target.value;
                }else if(target.id === 'count-two' && target.value === '3 штуки'){
                    parametersСounting.drainageCount = 0.5;
                    parametersFormSubmission.drainageCount = target.value;
                } 
            }else if(target.id ==='myonoffswitch-two'){
                if(target.checked === true){
                    parametersСounting.bottom = 2000;
                    parametersFormSubmission.bottom = 'Есть';
                }else{
                    parametersСounting.bottom = 1000;
                    parametersFormSubmission.bottom = 'Нет';
                }
            }
            
            calcResult.value = sumResult();
        });

        panelGroup.addEventListener('click', (event) => {
            let target = event.target;

            target = target.closest('div');

            if(target.id === 'headingOne'){
                collapseOne.classList.add('in');
                collapseTwo.classList.remove('in');
                collapseThree.classList.remove('in');
                collapseFour.classList.remove('in');   
            }else if(target.id === 'headingTwo'){
                collapseOne.classList.remove('in');
                collapseTwo.classList.add('in');
                collapseThree.classList.remove('in');
                collapseFour.classList.remove('in');  
            }else if(target.id === 'headingThree'){
                collapseOne.classList.remove('in');
                collapseTwo.classList.remove('in');
                collapseThree.classList.add('in');
                collapseFour.classList.remove('in');  
            }else if(target.id === 'headingFour'){
                collapseOne.classList.remove('in');
                collapseTwo.classList.remove('in');
                collapseThree.classList.remove('in');
                collapseFour.classList.add('in');  
            }
            
        });

        constructBtn.forEach((item, i) => {
           
            item.addEventListener('click', (event) => {
                event.preventDefault();
                let target = event.target;

                target = target.closest('.panel-collapse');

                if(target){
                    if(target.id === 'collapseOne'){
                        collapseOne.classList.remove('in');
                        collapseTwo.classList.add('in');
                    }else if(target.id === 'collapseTwo'){
                        collapseTwo.classList.remove('in');
                        collapseThree.classList.add('in');
                    }else if(target.id === 'collapseThree'){
                        collapseThree.classList.remove('in');
                        collapseFour.classList.add('in');
                    }else if(target.id === 'collapseFour'){
                        console.log('distance.value: ', distance.value);
                        parametersFormSubmission.distance = distance.value;
                        parametersFormSubmission.rez = calcResult.value;
                        animModel(popupDiscount, discountContent[1]);
                    }          
                }
            });
            
        });

        calcResult.value = sumResult();
        drainage();
    };

    accordionCalc();

    const sendForm = () => {
        const form1 = new Validator({
            selector: '#form1',
            pattern: {
                phone: /^\+375( )?(( )?\d){9}$|^\+?[78]([-()]*\d){10}$/,
                name: /^[а-яА-ЯёЁ]+$/
            },
            method: {
            'phone_1': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'name_1': [
                ['notEmpty'],
                ['pattern', 'name']
            ]
        }
        });

        const form3 = new Validator({
            selector: '#form3',
            pattern: {
                phone: /^\+375( )?(( )?\d){9}$|^\+?[78]([-()]*\d){10}$/,
            },
            method: {
            'phone_3': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
        }
        });

        
        const form2 = new Validator({
            selector: '#form2',
            pattern: {
                phone: /^\+375( )?(( )?\d){9}$|^\+?[78]([-()]*\d){10}$/,
                name: /^[а-яА-ЯёЁ]+$/,
            },
            method: {
            'phone_2': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],            
            'name_2': [
                ['notEmpty'],
                ['pattern', 'name']
            ]
        }
        });
    
       
    
        form1.init();
        form2.init();
        form3.init();
    };

    sendForm();
});