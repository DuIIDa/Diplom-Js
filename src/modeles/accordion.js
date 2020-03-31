'use strict';

const accordion = () => {
    const accordionTwo = document.querySelector('#accordion-two');
    const collapseOneTwo = document.querySelector('#collapseOne-two');
    const collapseTwoTwo = document.querySelector('#collapseTwo-two');
    const collapseThreeTwo = document.querySelector('#collapseThree-two');

    const animAccordionTwo = (hideOne, hideTwo, active) => {
        hideOne.style.maxHeight = null;
        hideTwo.style.maxHeight = null;
        if (active.style.maxHeight){
            active.style.maxHeight = null;
        } else {
            active.style.maxHeight = active.scrollHeight + "px";
        }
    };

    accordionTwo.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        target = target.closest('div');

        if(target.id === 'headingOne-two'){
            animAccordionTwo(collapseTwoTwo, collapseThreeTwo, collapseOneTwo);   
        }else if(target.id === 'headingTwo-two'){
            animAccordionTwo(collapseOneTwo, collapseThreeTwo, collapseTwoTwo);
        }else if(target.id === 'headingThree-two'){
            animAccordionTwo( collapseOneTwo, collapseTwoTwo, collapseThreeTwo);
        }
        
    });
};

export default accordion;