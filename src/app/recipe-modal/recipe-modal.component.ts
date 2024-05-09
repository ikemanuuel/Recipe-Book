import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from "../recipe/recipe.model";

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.scss']
})
export class RecipeModalComponent {
  @Input() recipes!: Recipe[];
  @Output() recipeAdded = new EventEmitter<Recipe>();
  

  isModalOpen = false;

  openRecipeModal() {
    this.isModalOpen = true;
  }

  closeRecipeModal() {
    this.isModalOpen = false;
  }

  addNewRecipe() {
    const newRecipe = new Recipe(3, 'New Recipe', 'Description of the new recipe', 'Ingredient','https://assets.unileversolutions.com/v1/93393012.jpg');
    this.recipeAdded.emit(newRecipe);
    this.closeRecipeModal(); // Close the modal after emitting the new recipe
  }
}
