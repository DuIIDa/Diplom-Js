'use strict';

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

export default animModel;