import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';
import { Ingredient } from '../recipe-list/recipe-list.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public recipe?: Recipe;
  public ingredients!: Ingredient[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((value) => {
      this.recipe = value;
      this.ingredients = value.ingredients;
    });
  }
}
