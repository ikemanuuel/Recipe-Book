import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
 selector: 'app-shopping-list',
 templateUrl: './shopping-list.component.html',
 styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[] = [];

 constructor() {}

 ngOnInit() {
    this.loadIngredients();
 }

 loadIngredients() {
    const storedIngredients = localStorage.getItem('ingredients');
    if (storedIngredients) {
      this.ingredients = JSON.parse(storedIngredients);
    }
 }

 onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.saveIngredients();
 }

 onDeleteIngredient(id: number) {
    this.ingredients = this.ingredients.filter(ingredient => ingredient.id !== id);
    this.saveIngredients();
 }

 saveIngredients() {
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
 }
}
