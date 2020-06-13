import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  arr:string[];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/appda.json').subscribe(
      data => {
        this.arr = data as string [];	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
