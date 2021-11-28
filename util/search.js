import {get} from '../../Utils/getElement.js';
import {getAsyncData} from "./getData.js";
import { showData } from "./showData.js";

const form = get('.searchForm')
const input = get('[name="drink"]');
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const value = input.value;
    if(!value) {
        getAsyncData(`${baseURL}a`, showData);
    };
    let searchedItem = `${baseURL}${value}`;
    getAsyncData(searchedItem, showData);

})
