import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
 selector: 'app-recipe-details',
 templateUrl: './recipe-details.component.html',
 styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
 @Input() recipe!: Recipe;
 @Input() selectedRecipeId!: number;
 isEditing = false;
 recipeCopy!: Recipe;

 constructor() { }

 ngOnInit() {
    this.selectedRecipeId = this.recipe.id;
 }

 onEditRecipe() {
    this.isEditing = true; // Toggle edit mode
    this.recipeCopy = { ...this.recipe };
 }

 onSaveChanges() {
    // Logic to save changes
    this.isEditing = false; // Exit edit mode after saving

    // Retrieve the current recipes from local storage
    const savedRecipes = localStorage.getItem('recipes');
    let recipes: Recipe[] = [];
    if (savedRecipes) {
      recipes = JSON.parse(savedRecipes);
    }

    // Find the index of the recipe to update
    const recipeIndex = recipes.findIndex(recipe => recipe.id === this.selectedRecipeId);

    if (recipeIndex !== -1) {
      // Update the recipe with the new values
      recipes[recipeIndex] = this.recipeCopy; // Corrected to use recipeCopy

      // Save the updated recipes back to local storage
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
    window.location.reload()
 }

closeEditForm() {
   this.isEditing = false;
  }
  
 onDeleteRecipe() {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      // Parse the JSON string back into an array of recipes
      const recipes = JSON.parse(savedRecipes) as Recipe[];

      // Find the index of the recipe to delete
      const recipeIndex = recipes.findIndex(recipe => recipe.id === this.selectedRecipeId);

      if (recipeIndex !== -1) {
        recipes.splice(recipeIndex, 1);

        // Save the updated recipes back to local storage
        localStorage.setItem('recipes', JSON.stringify(recipes));

        console.log(`Recipe with ID: ${this.selectedRecipeId} deleted from local storage`);
      } else {
        console.log(`Recipe with ID: ${this.selectedRecipeId} not found in local storage`);
      }
    } else {
      console.log('No recipes found in local storage');
    }
 }
}
