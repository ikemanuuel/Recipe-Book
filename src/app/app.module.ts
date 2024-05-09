import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { DropdownManageComponent } from './dropdown-manage/dropdown-manage.component';
// import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';
import { FormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
 declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DropdownComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    DropdownManageComponent,
    ShoppingEditComponent,
   //  RecipeModalComponent
 ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
