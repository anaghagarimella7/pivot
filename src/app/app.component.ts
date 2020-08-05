import { Component,ViewEncapsulation ,Renderer2} from '@angular/core';
import {data } from './data';
import {MatDialog, MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss'],
  
})
export class AppComponent {
  arr:string[];
  types= new Array();
 _object=Object;  dataSource ; condition=false; format=false;
 _ob=Object; alert=false;
 displayedColumns:string[]; numericColumns= new Array();elem; t;

  constructor(private httpService: HttpClient, private renderer: Renderer2){

  }
  ngOnInit(){
  this.httpService.get('./assets/appda.json').subscribe(
    data => {
      this.arr = data as string [];	
      this.displayedColumns=(this._object.keys(this.arr[0]));

    });
  }
  onCond(){
    this.condition=true;
    this.format=false;
  }
  onFormat(){
    this.format=true;
    this.condition=false;
  }
  
 
}