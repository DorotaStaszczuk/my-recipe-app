import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { RecipeApiService } from './recipe-api.service';
export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingredients: Ingredient[];
}
export interface Ingredient {
  name: string;
  value: string;
}
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];
  constructor(private recipeApiService: RecipeApiService) {}

  sortOptions = [
    {
      value: 'name,asc',
      label: 'po nazwie rosnąco',
    },
    {
      value: 'name,desc',
      label: 'po nazwie malejąco',
    },
    {
      value: 'rating,asc',
      label: 'po ocenie rosnąco',
    },
    {
      value: 'rating,desc',
      label: 'po ocenie malejąco',
    },
  ];

  sortControl = new FormControl('');
  filterControl = new FormControl('');

  ngOnInit() {
    this.recipeApiService.getRecipes().subscribe((result) => {
      this.recipes = [...result];
    });

    this.sortControl.valueChanges
      .pipe(map((value: string) => value.split(',')))
      .subscribe(([propName, sortValue]) => {
        if (propName === 'name' && sortValue === 'desc') {
          this.recipeApiService.sortRecipesByNameDesc().subscribe((result) => {
            this.recipes = [...result];
          });
        }
        if (propName === 'name' && sortValue === 'asc') {
          this.recipeApiService.sortRecipesByNameAsc().subscribe((result) => {
            this.recipes = [...result];
          });
        }
        if (propName === 'rating' && sortValue === 'desc') {
          this.recipeApiService
            .sortRecipesByRatingDesc()
            .subscribe((result) => {
              this.recipes = [...result];
            });
        }
        if (propName === 'rating' && sortValue === 'asc') {
          this.recipeApiService.sortRecipesByRatingAsc().subscribe((result) => {
            this.recipes = [...result];
          });
        }
      });

    this.filterControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value: string) => {
        this.recipeApiService.filter(value).subscribe((result) => {
          this.recipes = [...result];
        });
      });
  }
}
