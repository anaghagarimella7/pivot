import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-conditional-formatting-dialog',
  templateUrl: './conditional-formatting-dialog.component.html',
  styleUrls: ['./conditional-formatting-dialog.component.scss']
})
export class ConditionalFormattingDialogComponent implements OnInit {
  condformat=new Array();
  columns; 
  conditions=['Equal' , 'Not equal' , 'Less' , 'Greater' , 'Less or equal', 'Greater or equal',
   'Empty'];
   fonts=['Arial','Lucida Sans Unicode','Verdana','Courier New','Tahoma','Palatino Linotype','Impact','Georgia','Times New Roman'];
   selcolumn;
  constructor(public dialogRef: MatDialogRef<ConditionalFormattingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.condformat = [...data.format];
      this.columns =[...data.columns];
    }

  ngOnInit() {
    for(let i=0;i<this.columns.length;i++)
    {
      if(this.columns[i].datatype=='number')
      {
        this.selcolumn=this.columns[i].name;
      }
    }
  }

  submit(){
    
  if(this.condformat.length!=0){
    let l=this.condformat.length;
    for(var i=0;i<l;i++){
      if(this.condformat[i].value==''||this.condformat[i].value==undefined){
        alert("Enter a valid numeric value"); 
      }
    }
  }
  
    
      this.dialogRef.close(this.condformat);
      

  }
  cancel()
  {
    this.dialogRef.close();
  }

  deleteCondition(index)
  {
    if(index==0){
      console.log(this.condformat);
    }
    this.condformat.splice(index,1);
  }

  addCondition()
  {
    this.condformat.push({
      column:this.selcolumn,
      operator:this.conditions[0],
      value:'',
      font:this.fonts[0],
      color:'#000000',
      tcolor:'black'
    });
  }

}
