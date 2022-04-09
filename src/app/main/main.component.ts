import { Component } from '@angular/core';
import { ModalVisibilityService } from '../modal-visibility.service';

export type ToggleType = 'form' | 'details';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  toggle: ToggleType = 'form';
  isVisible$ = this.modalVisibilityService.isVisible$;

  get showRecipeForm() {
    return this.toggle === 'form';
  }

  get showRecipeDetails() {
    return this.toggle === 'details';
  }

  togglePanel(type: ToggleType) {
    this.toggle = type;
  }
  constructor(private modalVisibilityService: ModalVisibilityService) {}
}
