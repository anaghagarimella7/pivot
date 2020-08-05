import { data } from './../../data';
import { filter } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {

  filteroptions=['Equal' , 'Not equal' , 'Less' , 'Greater' , 'Less or equal', 'Greater or equal',
   'Begin' , 'Not Begin'];
   option='Equal';
   value;
  constructor( public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.value=data.columns[data.index].filter.value;
    }

  ngOnInit() {
    this.value='';
  }
  cancel() {
    this.dialogRef.close();
  }
  submit() {
    /*if(!(this.value.match(/^[A-Za-z]+$/)||this.value.match(/^[0-9]+$/) )){
      alert("Enter a valid string");
      return;
    }*/
    if(this.value!=null && this.value!='' && this.value!=' ')
    {
    //this.value=this.value.toLowerCase();
    const index = this.data.index;
    this.data.columns[index].filter = {
      status : true,
      option : this.option,
      value : this.value,
    };
  }
  else{
    alert("Filter should not be empty")
  }
    this.dialogRef.close();
  }
  clearFilter() {
    this.value = '';
    const index = this.data.index;
    this.data.columns[index].filter = {
      status : false,
      option : '',
      value : ''
    };
  }

}
