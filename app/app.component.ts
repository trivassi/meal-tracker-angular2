import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Track-a-meal</h1>
      <meal-list></meal-list>
  </div>
    `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Lunch","Mexican", 200),
    new Meal("Dinner","Italian", 300),
    new Meal("Breakfast","American", 200)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
