import { get } from "../../Utils/getElement.js";
import { hideLoading } from "./ToggleLoading.js";


const title = get('.title');
const section = get('.cocktails');

export function showData(data){
    const {drinks} = data;
    //console.log(drinks);

    if (!drinks) {
    hideLoading();
    title.textContent = 'Sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
    }

    let drink = drinks.map((drink)=>{
        title.textContent ='';
        // getting the data from the API
        const {idDrink : id} = drink;
        const {strDrinkThumb : image} = drink;
        const {strDrink : name} = drink;

        return `
            <a href="./singleDrink.html">
        <div class="Cocktail" data-id="${id}">
            <img src="${image}" alt="${name}">
            <h1 class="drinkName">${name}</h1>
        </div>
        </a>
    `
    });
    hideLoading();
    drink = drink.join('');

    section.innerHTML = drink;
};
