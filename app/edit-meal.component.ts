import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h2>Edit Meal</h2>
    <div>
      <label>Enter Meal Name:</label>
      <input [(ngModel)]="childSelectedMeal.name">
    </div>
    <div>
      <label>Enter Meal Details:</label>
      <input [(ngModel)]="childSelectedMeal.details">
    </div>
    <div>
      <label>Enter Meal Details:</label>
      <input [(ngModel)]="childSelectedMeal.calories">
    </div>
    <div>
      <label>Enter Meal Details:</label>
      <input [(ngModel)]="childSelectedMeal.date">
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
