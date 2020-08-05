import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { AddFieldDialogComponent } from '../add-field-dialog/add-field-dialog.component';

@Component({
  selector: 'app-field-dialog',
  templateUrl: './field-dialog.component.html',
  styleUrls: ['./field-dialog.component.scss']
})
export class FieldDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<FieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private dialog:MatDialog) {
      console.log(data);
     }

  ngOnInit() {
  }
  submit()
  {
    this.dialogRef.close();
  }
  openAddFieldDialog()
  {
    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      width: '50%',
      height: '100%',
      data: {columns:this.data.columns , items : this.data.items}
    });
  }

}
