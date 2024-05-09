import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'recipes', component: RecipeComponent },
 { path: 'shopping-list', component: ShoppingListComponent },
 { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
