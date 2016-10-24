import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    EditMealComponent,
    NewMealComponent,

  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
