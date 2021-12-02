// Imports
import {getAsyncData} from "./util/getData.js";
import {get} from "./Utils/getElement.js";
import { showData } from "./util/showData.js";
import './util/search.js';
import setDrink from "./util/setDrink.js";
import './util/scroll.js';

// Variables
const sectionCocktails = get('.section');
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

// Functions
const showDrinks = async () => {

    await getAsyncData(url, showData);
    setDrink(sectionCocktails);
}

window.addEventListener('DOMContentLoaded', showDrinks());



