import {get} from "./getElement.js";

const loading = get('.loading');

export const showLoading = ()=>{
    loading.classList.remove('hide');
}

export const hideLoading = ()=>{
    loading.classList.add('hide');
}