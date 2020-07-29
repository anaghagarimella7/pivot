import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.css']
})
export class DialogLabelComponent implements OnInit {
  stringOperator="Equal";
  label="";
  constructor(public dialogRef: MatDialogRef<DialogLabelComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onOperator(event:Event){
    this.stringOperator=(<HTMLInputElement>event.target).value; 
    if(this.stringOperator==undefined){
      this.data.string="Equal";
    }

    else{
    this.data.string=this.stringOperator;
    }
    console.log(this.data.string);
    console.log(this.stringOperator);

  }
  Label(event:Event){
    this.label=(<HTMLInputElement>event.target).value;
    if(this.label==undefined){
      this.data.label=' ';
      
    }
    else{
    this.data.label=this.label;
    }
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
    console.log(this.data.label+" "+this.data.string);
  }

}
