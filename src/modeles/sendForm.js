'use strict';

import parametersFormSubmission from './global';

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const formParametrs = document.querySelectorAll('.form-parametrs');
    const forms = document.querySelectorAll('.forms');
    
    let question = document.getElementById('question');
    
    //Отправка Форм
    const postData = (body) => {
        return fetch('./server.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const messagePost = (form) => {
        form.addEventListener('submit', (event) => {
                event.preventDefault();
                let loadMessage;
            
                let elementsForm = [...form.elements].filter((item) => {
                    return item.tagName.toLowerCase() !== 'button' &&
                    item.type !== 'button';
                });

                if(loadMessage){
                    form.removeChild(loadMessage);
                }else{
                    loadMessage = document.createElement('div');
                    loadMessage.style.cssText = 'font-size: 2rem';
                }

                form.appendChild(loadMessage);
                loadMessage.innerHTML = `<div>Загрузка...</div>`;
                
                let body = {};

                if(form.id === 'parametrs_1'){
                    body = {addInfo: parametersFormSubmission};
                }else if(form.id === 'parametrs_2'){
                    body = {addInfo: question.value};
                }

                const formData = new FormData(form);
                formData.forEach( (value, key) => {
                    body[key] = value;
                });
                
                postData(body)
                    .then((response) => {
                        if(response.status !== 200){
                            throw new Error('Status network not 200');
                        }
                        loadMessage.textContent = successMessage;
                    })               
                    .catch((error) => {
                        loadMessage.textContent = errorMessage;
                        console.error(error);
                    });

                setTimeout(() => {
                    form.removeChild(loadMessage);
                    let closeForm = form.closest('.popup');
                    if(closeForm){
                        closeForm.style.display = 'none';
                    }
                }, 5000);

                elementsForm.forEach(elem => {
                    elem.value = '';
                });
                question.value = '';
        });
    };
    
    forms.forEach(item => {
        messagePost(item);
    });

    formParametrs.forEach((item) => {
        messagePost(item);
    });
};

export default sendForm;