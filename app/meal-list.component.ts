import { Component } from '@angular/core';

@Component({
  selector: 'meal-list',
  template: `
  <h2>All of your meals:</h2>
  <div *ngFor="let currentMeal of allMeals">
    <h3>{{ currentMeal.name }}</h3>
  </div>
  `
})

export class MealListComponent {

}
