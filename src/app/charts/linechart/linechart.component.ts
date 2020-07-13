import { Component, OnInit } from '@angular/core';  
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../Data';  
@Component({  
  selector: 'app-linechart',  
  templateUrl: './linechart.component.html',  
  styleUrls: ['./linechart.component.css']  
})  
export class LinechartComponent implements OnInit {  
  url = 'http://localhost:4000/results';  
  data: Data[];  
  Player = [];  
  Run = [];  
  Linechart = [];  column="";x=1;y=2;column2="";
  barchart = [];  _object=Object; arr:string[];
  displayedColumns;
  constructor(private httpClient: HttpClient) { }  
  ngOnInit() { 
    this.httpClient.get('/assets/appda.json').subscribe(
      data=>{
        this.arr=data as string[];
        this.displayedColumns=(this._object.keys(this.arr[0]))
        console.log(this.displayedColumns);
        for(var i=0;i<this.arr.length;i++){
        this.Player.push(this.arr[i][this.displayedColumns[this.x]]);  
        this.Run.push(this.arr[i][this.displayedColumns[this.y] ]); 
        }
  
    
      this.Linechart.push(new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.Player,  
          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
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
}
