import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
 selector: 'app-shopping-edit',
 templateUrl: './shopping-edit.component.html',
 styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
 ingredient: Ingredient[] = [];
 name: string = '';
 amount: string = ''; // Initialize amount as an empty string
 lastIngredientId: number = 0; // Initialize the last ingredient ID

 @Output() ingredientAdded = new EventEmitter<Ingredient>();

 constructor() {
  // Load lastIngredientId from local storage or default to 0
  this.lastIngredientId = Number(localStorage.getItem('lastIngredientId')) || 0;
}

onAddItem() {
  if (!this.name || !this.amount.toString().trim()) {
    alert('Please fill in all fields before adding the ingredient.');
    return;
  }

  this.lastIngredientId++;
  const newIngredient = new Ingredient(this.lastIngredientId, this.name, parseFloat(this.amount));
  this.ingredientAdded.emit(newIngredient);

  
  localStorage.setItem('lastIngredientId', this.lastIngredientId.toString());

  this.name = '';
  this.amount = '';
}
}

