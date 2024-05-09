import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
selectedRecipe!: Recipe;

constructor() { }

ngOnInit() {

}

refreshList() {
  // Logic to refresh the list of recipes
  // This could involve re-fetching the list from local storage or updating the component's state
  console.log('Refreshing the list of recipes');
  // Example: Re-fetch the list from local storage
  // this.recipes = this.getRecipesFromLocalStorage();
}
}
