import { Component, OnInit } from '@angular/core';  
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../Data';  
@Component({  
  selector: 'app-barchart',  
  templateUrl: './barchart.component.html',  
  styleUrls: ['./barchart.component.css']  
})  
export class BarchartComponent implements OnInit {  
  data: Data[];  
  url = 'http://localhost:4000/results';  
  Player = [];  
  Run = [];  column="";x=1;y=2;column2="";
  barchart = [];  _object=Object; arr:string[];
  displayedColumns;
  constructor(private http: HttpClient) { }  
  ngOnInit() { 
    this.http.get('/assets/appda.json').subscribe(
      data=>{
        this.arr=data as string[];
        this.displayedColumns=(this._object.keys(this.arr[0]))
        console.log(this.displayedColumns);
        for(var i=0;i<this.arr.length;i++){
        this.Player.push(this.arr[i][this.displayedColumns[this.x]]);  
        this.Run.push(this.arr[i][this.displayedColumns[this.y] ]); 
        }
      
    /*this.http.get(this.url).subscribe((result: string[]) => {  
      this.arr=result as string[];
      this.displayedColumns=(this._object.keys(this.arr[0]))
      result.forEach(x => {  
        this.Player.push(this.displayedColumns[1]);  
        this.Run.push(this.displayedColumns[2]);  
      });  */
      
      this.barchart.push(new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.Player,  
          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      }));  
    });  
  }  

  onColumnNameSelect(event:Event){
    this.column=(<HTMLInputElement>event.target).value; 
    this.x=(this.displayedColumns.indexOf(this.column));
  }
  onColumnNameSelect2(event:Event){
    this.column2=(<HTMLInputElement>event.target).value; 
    this.y=(this.displayedColumns.indexOf(this.column2));
  }

}