import { Component,ViewChild, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

export interface FlatTable {
  category: string;
  position: number;
  month: string;
  revenue: number;
}

const ELEMENT_DATA: FlatTable[] = [
  {position: 1, category: 'Bakery', month :'April', revenue: 3950.0},
  {position: 2, category: 'Soups', month :'April', revenue: 1260.0},
  {position: 3, category: 'Cerelas', month :'April', revenue: 3555.0},
  {position: 4, category: 'Fruit Preserves', month :'April', revenue: 5250.0},
  {position: 5, category: 'Condiments', month :'April', revenue: 2487.50},
  {position: 6, category: 'Confectionary', month :'April', revenue: 987.50},
  {position: 7, category: 'Bakery', month :'April', revenue: 2485.0},
  {position: 8, category: 'Soups', month :'March', revenue: 3825.0},
  {position: 9, category: 'BreakfastCereals', month :'March', revenue: 3950.0},
  {position: 10, category: 'Bakery', month :'March', revenue: 3937.50},

  
];
@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  arr:string[];
  displayedColumns: string[] = ['position', 'category', 'month', 'revenue'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;

    this.httpService.get('./assets/appda.json').subscribe(
      data => {
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
        console.log(this.arr);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
