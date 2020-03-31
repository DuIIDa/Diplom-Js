'use strict';

import parametersFormSubmission from './global';
import animModel from './animModel';


const accordionCalc = () => {
    const panelGroup = document.querySelector('.panel-group');
    const constructBtn = document.querySelectorAll('.construct-btn');

    const popupDiscount = document.querySelector('.popup-discount');
    const formParametrs = document.querySelectorAll('.form-parametrs');
    const discountContent = document.querySelectorAll('.popup-content');

    const collapseOne = document.querySelector('#collapseOne');
    const collapseTwo = document.querySelector('#collapseTwo');
    const collapseThree = document.querySelector('#collapseThree');
    const collapseFour = document.querySelector('#collapseFour');

    const myonoffswitch = document.querySelector('#myonoffswitch');//.checked
    const distance = document.getElementById('distance');
    const calcResult = document.querySelector('#calc-result');
    
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
                parametersFormSubmission.drainageDiameter = '0';
                parametersFormSubmission.drainageCount = '';
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
                parametersFormSubmission.drainageDiameter = '1.4 метра';
                parametersFormSubmission.drainageCount = '1 штука';
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

    const animAccordionTwo = (hideOne, hideTwo, hideThree,active) => {
        hideOne.style.maxHeight = null;
        hideTwo.style.maxHeight = null;
        hideThree.style.maxHeight = null;
        if (active.style.maxHeight){
            active.style.maxHeight = null;
        } else {
            active.style.maxHeight = active.scrollHeight + "px";
        }
    };

    panelGroup.addEventListener('click', (event) => {
        let target = event.target;

        target = target.closest('div');

        if(target.id === 'headingOne'){
            animAccordionTwo(collapseTwo, collapseThree, collapseFour, collapseOne);
        }else if(target.id === 'headingTwo'){
            animAccordionTwo( collapseOne, collapseThree, collapseFour, collapseTwo);  
        }else if(target.id === 'headingThree'){
            animAccordionTwo( collapseOne, collapseTwo, collapseFour, collapseThree);  
        }else if(target.id === 'headingFour'){
            collapseFour.style.display = 'block';
            animAccordionTwo( collapseOne, collapseTwo, collapseThree, collapseFour);  
        }
        
    });

    constructBtn.forEach((item) => {
       
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
                    parametersFormSubmission.distance = distance.value;
                    parametersFormSubmission.rez = calcResult.value;
                    formParametrs[0].id = 'parametrs_1';
                    animModel(popupDiscount, discountContent[1]);
                }          
            }
        });
        
    });

    calcResult.value = sumResult();
    drainage();

    parametersFormSubmission.type =  'Однокамерный';
    parametersFormSubmission.fosterDiameter = '1.4 метра';
    parametersFormSubmission.fosterCount = '1 штука';
    parametersFormSubmission.drainageDiameter = '';
    parametersFormSubmission.drainageCount = '';
    parametersFormSubmission.bottom = 'Есть';
    parametersFormSubmission.distance = '0 Метров';
    parametersFormSubmission.rez = calcResult.value;

};

export default accordionCalc;