'use strict';

const closeModel = (block, target, event) => {
    let forms = document.querySelectorAll('form');

    const CleanForms = () => {
        forms.forEach(item => {
            let elementsForm = [...item.elements].filter((item) => {
                return item.tagName.toLowerCase() !== 'button' &&
                item.type !== 'button';
            });

            elementsForm.forEach(elem => {
                elem.value = '';
            });
        });
    };

    if(target.className === 'popup-close'){
        event.preventDefault();
        CleanForms();
        block.style.display = 'none';
    }else {
        target = target.closest('.popup-content');

        if(!target){
            CleanForms();
            block.style.display = 'none';
        }
    }
};

export default closeModel;