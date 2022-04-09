import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Recipe } from './recipe-list/recipe-list.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public selectedRecipe = new ReplaySubject<Recipe>(1);
  constructor() {}
}
