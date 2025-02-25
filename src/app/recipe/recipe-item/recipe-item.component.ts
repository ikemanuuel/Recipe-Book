import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter <void> ();

  constructor() {}

  ngOnInit() {
  }  
    onSelected(){
      this.recipeSelected.emit();

  }
  
}
