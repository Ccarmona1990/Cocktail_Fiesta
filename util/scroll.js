import {get} from "./getElement.js";

const top = get('.b-Top');

window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    console.log(scrollHeight);
    if (scrollHeight > 500){
        top.classList.remove('hide');
    } else if (scrollHeight < 500){
        top.classList.add('hide');
    }
})