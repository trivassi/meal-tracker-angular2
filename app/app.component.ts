import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Track-a-meal</h1>
    <meal-list
      [childMealList]="selectedMeal"
      (clickSender)="showDetails($event)"
    ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
    `
})

export class AppComponent {
  //data down
  public masterMealList: Meal[] = [
    new Meal("Lunch","Mexican", 200, "10-12-16"),
    new Meal("Dinner","Italian", 300, "10-12-16"),
    new Meal("Breakfast","American", 200, "10-12-16")
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
