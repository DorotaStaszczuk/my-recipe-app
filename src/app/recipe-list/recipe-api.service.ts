import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe-list.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  constructor(private http: HttpClient) {}

  public getRecipes() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  public sortRecipesByRatingAsc() {
    return this.http.get<Recipe[]>(
      'http://localhost:3000/recipes?_sort=rating&_order=asc'
    );
  }

  public sortRecipesByRatingDesc() {
    return this.http.get<Recipe[]>(
      'http://localhost:3000/recipes?_sort=rating&_order=desc'
    );
  }

  public sortRecipesByNameAsc() {
    return this.http.get<Recipe[]>(
      'http://localhost:3000/recipes?_sort=name&_order=asc'
    );
  }

  public sortRecipesByNameDesc() {
    return this.http.get<Recipe[]>(
      'http://localhost:3000/recipes?_sort=name&_order=desc'
    );
  }

  public filter(filterValue: string) {
    return this.http.get<Recipe[]>(
      'http://localhost:3000/recipes?name_like=' + filterValue
    );
  }
}
