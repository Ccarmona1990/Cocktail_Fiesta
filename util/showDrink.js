import {get} from "./getElement.js";
import { hideLoading } from "./ToggleLoading.js";


const title = get('.title');
const section = get('.singleDrink');

export function showDrink(data){
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
        const {
          idDrink : id, 
          strDrinkThumb : image,
          strDrink : name, 
          strInstructions : inst
        } = drink;
        const ingredients = [
          drink.strIngredient1, 
          drink.strIngredient2, 
          drink.strIngredient3, 
          drink.strIngredient4, 
          drink.strIngredient5];

          document.title = name;

        const ingr = ingredients.map((ingr)=>{
          if(!ingr) return;
          return `<li>
                <i class="far fa-check-square">  ${ingr}</i>
              </li>`
        }).join('');

        const singleDrink  = `
            <div class="drink" data-id="${id}">
            <img src="${image}" alt="${name}" />
          </div>

          <div class="drinkInfo">
            <h1 class="drinkName">${name}</h1>
            <h2 class="description">
              ${inst}
            </h2>
            <ul class="ingredients">
              ${ingr}
            </ul>

            <a href="./index.html" class="btn">all cocktails
            </a>
          </div>

          </div>
    `
    return singleDrink;
    });

    hideLoading();
    section.innerHTML = drink;

};
