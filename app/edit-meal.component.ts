import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="selectedMeal">
    <h2>Edit Meal</h2>
    <div>
      <label>Enter Meal Details:</label>
      <input [(ngModel)]="selectedMeal.details">
    </div>
    <div>
      <label>Enter Meal Calories:</label>
      <input [(ngModel)]="selectedMeal.calories">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childMealList: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
