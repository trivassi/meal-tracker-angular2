import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="selectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Meal Description:</label>
        <input [(ngModel)]="selectedMeal.description">
      </div>
      <div>
        <label>Enter Meal Name:</label>
        <input [(ngModel)]="selectedMeal.name">
        <button (click)="finishedEditing()">Done</button>
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

}
