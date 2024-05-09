import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from "../recipe.model";


@Component({
 selector: 'app-recipe-list',
 templateUrl: './recipe-list.component.html',
 styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

 recipes: Recipe[] = [];
 newRecipeName: string = '';
 newRecipeDescription: string = ''; 
 newIngredient: string ='';
 newRecipeImageUrl: string = '';

 constructor() {}

 ngOnInit() {
    this.loadRecipesFromLocalStorage(); 
 }

 onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
 }

 isModalOpen = false;
 openRecipeModal() {
    this.isModalOpen = true;
 }

 closeRecipeModal() {
    this.isModalOpen = false;
 }

 addNewRecipe() {
   if (!this.newRecipeName || !this.newRecipeDescription || !this.newIngredient) {
     
      alert('Please fill in all fields before adding the recipe.');
      return;
   }
  
   
   const newRecipe = new Recipe(this.recipes[this.recipes.length -1].id+1, this.newRecipeName, this.newRecipeDescription, this.newIngredient, this.newRecipeImageUrl);
   this.recipes.push(newRecipe);
   this.saveRecipesToLocalStorage();
   this.closeRecipeModal();
   
   this.newRecipeName = '';
   this.newRecipeDescription = '';
   this.newIngredient = '';
   this.newRecipeImageUrl = '';
  }
  

saveRecipesToLocalStorage() {
 localStorage.setItem('recipes', JSON.stringify(this.recipes));
}

loadRecipesFromLocalStorage() {
 const savedRecipes = localStorage.getItem('recipes');
 if (savedRecipes) {
    this.recipes = JSON.parse(savedRecipes);
    console.log(this.recipes);
 }
}


onImageSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.newRecipeImageUrl = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}



// recipe-list.component.ts
refreshList() {
   // Re-fetch the list of recipes from local storage
   // This is a simplified example; your actual implementation might differ
   this.recipes = this.getRecipesFromLocalStorage();
  }
  
  getRecipesFromLocalStorage() {
   // Logic to fetch all recipes from local storage
   // This is a placeholder; your actual implementation will depend on how you're storing recipes
   return [];
  }
  
}
