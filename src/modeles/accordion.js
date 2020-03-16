'use strict';

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

export default accordion;