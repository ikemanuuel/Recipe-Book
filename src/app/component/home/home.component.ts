import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import Flickity from 'flickity';



@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss'],
 encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit {
 recipe: any; // Define a property to hold the selected recipe

 constructor(
   private recipeService: RecipeService,
   
) {} // Inject RecipeService

 ngOnInit() {
    this.loadRecipes();
    
 }

 ngAfterViewInit() {
    this.initializeFlickity();
 }

 loadRecipes() {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length) {
      // Select the first recipe as an example
      this.recipe = recipes;
      console.log(recipes);
    }
 }

 initializeFlickity() {
    // Initialize Flickity on the .home-section-animation element
    new Flickity('.home-section-animation', {
      cellAlign: 'left',
      contain: true,
      freeScroll: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 4000,
      pauseAutoPlayOnHover: true
    });
 }
}
