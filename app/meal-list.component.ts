import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component ({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="high">Show High Calorie Meals</option>
    <option value="low">Show Low Calorie Meals </option>
  </select>
  <h2>All of your meals:</h2>
  <div *ngFor="let currentMeal of childMealList | calories: selectedCalories">
    <h3>{{ currentMeal.name }}</h3>
    <h4> {{ currentMeal.calories }}</h4>
    <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "all";
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
