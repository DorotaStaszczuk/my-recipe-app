import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const routes: Routes = [
  {
    path: 'details',
    component: RecipeDetailsComponent,
    canActivate: [],
  },
  {
    path: 'details/:id',
    component: RecipeDetailsComponent,
    canActivate: [],
  },
  {
    path: 'form',
    component: RecipeFormComponent,
    canActivate: [],
  },
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'details',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
