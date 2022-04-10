import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ModalVisibilityService } from '../modal-visibility.service';
import { RecipeFormService } from '../recipe-form.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  recipeForm!: FormGroup;
  constructor(
    private modalVisibilityService: ModalVisibilityService,
    private recipeFormService: RecipeFormService,
    private formBuilder: FormBuilder
  ) {}

  get recipeName() {
    return this.recipeForm.get('recipeName');
  }
  get recipeDescription() {
    return this.recipeForm.get('recipeDescription');
  }
  get ingredientsArray() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  get ingredientsArrayControls() {
    return this.ingredientsArray.controls as FormGroup[];
  }

  ngOnInit(): void {
    this.recipeForm = this.recipeFormService.createForm();
  }

  addIngredient() {
    this.ingredientsArray.push(
      new FormGroup({
        ingredientName: this.formBuilder.control(''),
        ingredientAmount: this.formBuilder.control(''),
      })
    );
  }

  onSubmit() {
    this.recipeForm.markAllAsTouched();
    if (this.recipeForm.invalid) {
      return;
    }
  }

  openModal() {
    this.modalVisibilityService.isVisible$.next(true);
  }
}
