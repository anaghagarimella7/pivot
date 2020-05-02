import { Component,ViewEncapsulation } from '@angular/core';
import {data } from './data';
import {MatDialog, MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss'],
  
})
export class AppComponent {
  childTitle:string="Parent Child";
  title = 'Conditional Formatting';
  category=['FruitPreserves','Soups','BreakfastCereals','Bakery','Confectionery','FruitPreserves','Condiments','BreakfastCereals','Bakery'];
  month=['April','April','April','April','April','April','March','March','March'];
  revenue=[3950,1260,3555,5250,2487,987,3825,3950,3937];
  mon=this.month[0];
  rev=this.revenue[0];
  
  less="true";
  dat=[
    new data('FruitPreserves','April',3950.00),
    new data('Soups','April',1260.00),
    new data('BreakfastCereals','April',3555.00),
    new data('Bakery','April',5250.00),
    new data ('Confectionery','April',2487.50),
    new data('FruitPreserves','April',987.50),
    new data('Condiments','March',3825.00),
    new data('BreakfastCereals','March',3950.00),
    new data('Bakery','March',3937.50)
  ];
  
  d=this.dat[0];
  value;
  displayedColumns=['category','month','revenue'];
  constructor(){

  }
 
}