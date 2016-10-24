import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <h2>All of your meals:</h2>
  <div *ngFor="let currentMeal of childMealList">
    <h3>{{ currentMeal.name }}</h3>
    <h4> {{ currentMeal.calories }}</h4>
    <button(click)="showDetails(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
