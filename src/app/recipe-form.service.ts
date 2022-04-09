import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RecipeFormService {
  constructor(private formBuilder: FormBuilder) {}

  public createForm() {
    const recipeForm = this.formBuilder.group({
      recipeName: ['', [Validators.required, Validators.minLength(3)]],
      recipeDescription: ['', [Validators.required, Validators.minLength(10)]],
      ingredients: this.formBuilder.array([
        this.formBuilder.group({
          ingredientName: ['', Validators.required],
          ingredientAmount: ['', Validators.required],
        }),
      ]),
    });

    return recipeForm;
  }
}
