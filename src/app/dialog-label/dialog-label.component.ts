import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.css']
})
export class DialogLabelComponent implements OnInit {
  stringOperator="";
  label="";
  constructor(public dialogRef: MatDialogRef<DialogLabelComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onOperator(event:Event){
    this.stringOperator=(<HTMLInputElement>event.target).value; 
    console.log(this.stringOperator);
    this.data.string=this.stringOperator;
  }
  Label(event:Event){
    this.label=(<HTMLInputElement>event.target).value;
    this.data.label=this.label;
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
    console.log(this.data.label);
  }

}
