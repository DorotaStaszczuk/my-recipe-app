import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss'],
})
export class RecipeTileComponent {
  @Input() public recipe!: Recipe;
  constructor(private recipeService: RecipeService) {}

  selectRecipe() {
    this.recipeService.selectedRecipe.next(this.recipe);
  }
}
