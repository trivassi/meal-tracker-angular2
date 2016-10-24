import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
  <div>
    <label>Enter Meal Name:</label>
    <input #newName>
  </div>
  <div>
    <label>Enter it's Details:</label>
    <input #newDetails>
  </div>
  <div>
    <label>How many calories?</label>
    <input #newCalories>
  </div>
  <div>
    <label>Meal Date:</label>
    <input #newDate>
    <button (click)="addClicked(newName.value, newDetails.value, newCalories.value, newDate.value);
    newName.value='';
    newDetails.value='';
    newCalories.value='';
    newDate.value='';
    ">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number, date: string) {
    var newMealToAdd: Meal = new Meal(name, details, calories, date);
    this.newMealSender.emit(newMealToAdd)
  }
}
