// recipe.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): any[] {
    const recipesString = localStorage.getItem('recipes');
    if (recipesString !== null) {
      return JSON.parse(recipesString);
    } else {
      return [];
    }
  }
  

  deleteRecipe(recipeId: number): void {
    let recipes = this.getRecipes();
    const index = recipes.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
      recipes.splice(index, 1);
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }
}
