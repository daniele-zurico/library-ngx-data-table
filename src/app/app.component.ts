import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any[] = [
    {id: 1, name: 'Hydrogen', age: 23},
    {id: 2, name: 'Helium', age: 30},
    {id: 3, name: 'Lithium', age: 2},
    {id: 4, name: 'Beryllium', age: 10},
    {id: 5, name: 'Boron', age: 15},
    {id: 6, name: 'Carbon', age: 23},
    {id: 7, name: 'Nitrogen', age: 45},
    {id: 8, name: 'Oxygen', age: 38},
    {id: 9, name: 'Fluorine', age: 55},
    {id: 10, name: 'Neon', age: 60},
    {id: 11, name: 'Sodium', age: 12},
    {id: 12, name: 'Magnesium', age: 15},
    {id: 13, name: 'Aluminum', age: 18},
    {id: 14, name: 'Silicon', age: 20},
    {id: 15, name: 'Phosphorus', age: 23},
    {id: 16, name: 'Sulfur', age: 22},
    {id: 17, name: 'Chlorine', age: 23},
    {id: 18, name: 'Argon', age: 32},
    {id: 19, name: 'Potassium', age: 40},
    {id: 20, name: 'Calcium', age: 50},
  ];
}
