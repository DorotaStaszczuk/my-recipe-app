import { Component } from '@angular/core';
import { ModalVisibilityService } from '../modal-visibility.service';

@Component({
  selector: 'app-recipe-rate',
  templateUrl: './recipe-rate.component.html',
  styleUrls: ['./recipe-rate.component.scss'],
})
export class RecipeRateComponent {
  constructor(private modalVisibilityService: ModalVisibilityService) {}

  closeModal() {
    this.modalVisibilityService.isVisible$.next(false);
  }
}
