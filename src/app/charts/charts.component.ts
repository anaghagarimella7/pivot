import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  column=""; column2=""; x=1;y=2;
  barchart = [];  _object=Object; arr:string[];
  displayedColumns;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get('/assets/appda.json').subscribe(
      data=>{
        this.arr=data as string[];
        this.displayedColumns=(this._object.keys(this.arr[0]))
  });
}
  onColumnNameSelect(event:Event){
    this.column=(<HTMLInputElement>event.target).value; 
    this.x=(this.displayedColumns.indexOf(this.column));
    console.log(this.x);
  }
  onColumnNameSelect2(event:Event){
    this.column2=(<HTMLInputElement>event.target).value; 
    this.y=(this.displayedColumns.indexOf(this.column2));
    console.log(this.y);
  }

}
