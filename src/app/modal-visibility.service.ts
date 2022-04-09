import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalVisibilityService {
  isVisible$ = new BehaviorSubject(false);

  constructor() {}
}
