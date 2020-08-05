import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-field-dialog',
  templateUrl: './add-field-dialog.component.html',
  styleUrls: ['./add-field-dialog.component.scss']
})
export class AddFieldDialogComponent implements OnInit {
  operators = ['(', ')', '+', '-', '%', '/', '*'];
  formula = '';
  fieldname = '';
  constructor(public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  submit() {
    if(this.fieldname==''|| this.fieldname==null|| this.fieldname==' '){
      alert("Field name should not be empty");
      return;
    }
    if(this.formula=='' || this.formula==undefined){
      window.alert("Formula should not be empty");
      return;
    }
    let calculation = '';
    for (let i = 0; i < this.formula.length; i++) {
      if (this.formula[i] === '"') {
        i++;
        let property = '';
        while (this.formula[i] !== '"' && this.formula[i] !== undefined) {
          property += this.formula[i];
          i++;
        }
        calculation += 'data[\'' + property + '\']';
      } else {
        calculation += this.formula[i];
      }
    }
    this.data.items = this.data.items.map(data => {
      try{
      const newFieldValue = eval(calculation);
      console.log(newFieldValue);
      data[this.fieldname]=newFieldValue;
      return eval(data);
      }catch(eror)
      {
        window.alert("Something Went Wrong.Please check formula..!");
        throw Error;
      }
    });
    console.log(calculation);
    this.data.columns.push({
      name: this.fieldname,
      asc: 0,
      checked: true,
      filter :{
        status : false,
        option:'',
        value:''
      },datatype:'number'
    });
    this.dialogRef.close();
  }
  cancel() {
    this.dialogRef.close();
  }
  addOperand(operand) {
    this.formula += "\"" + operand + "\"";
  }

  addOperator(operator) {
    this.formula += operator;
  }


}
