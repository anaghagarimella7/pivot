import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  arr:string[];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
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
