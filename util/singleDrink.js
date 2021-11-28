import { getAsyncData } from "./getData.js";
import { showDrink } from "./showDrink.js";

const id = localStorage.getItem('drink');
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

if (id > 1){
    window.addEventListener('DOMContentLoaded', getAsyncData(url, showDrink));
} else {
    window.location.replace('index.html');
}


