import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MealListComponent } from './meal-list.component';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MealListComponent,
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
