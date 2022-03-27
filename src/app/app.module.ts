import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeTileComponent } from './recipe-tile/recipe-tile.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { MainComponent } from './main/main.component';
import { RecipeRateComponent } from './recipe-rate/recipe-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeTileComponent,
    RecipeDetailsComponent,
    RecipeFormComponent,
    MainComponent,
    RecipeRateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
