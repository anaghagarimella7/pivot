import { Component, OnInit } from '@angular/core';  
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../Data';  
@Component({  
  selector: 'app-piechart',  
  templateUrl: './piechart.component.html',  
  styleUrls: ['./piechart.component.css']  
})  
export class PiechartComponent implements OnInit {  
    title = 'app';  
    data: Data[];  
    url = 'http://localhost:4000/results';  
    Player = [];  
    Run = [];  
    chart = [];  
    constructor(private httpClient: HttpClient) { }  
    ngOnInit() {  
      this.httpClient.get(this.url).subscribe((result: Data[]) => {  
        result.forEach(x => {  
          this.Player.push(x.month);  
          this.Run.push(x.price);  
        });  
        this  
        this.chart.push(new Chart('canvas', {  
          type: 'pie',  
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
              display: true  
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