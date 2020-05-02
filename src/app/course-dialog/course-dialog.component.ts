import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  op1='>';
  value ;
  constructor( public dialogRef: MatDialogRef<CourseDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data.operators);
  }

  ngOnInit(): void {
  }
  onOp1(event:Event){
    this.op1=(<HTMLInputElement>event.target).value; 
    console.log(this.op1);
    this.data.operator=this.op1;
  }
  Value(event:Event){
    this.value=(<HTMLInputElement>event.target).value;
    this.data.value=this.value;
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
    console.log(this.data.value);
  }
}
