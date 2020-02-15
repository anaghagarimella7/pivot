import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
 @Input() title:string;
  constructor() { }

  ngOnInit() {
  }
 displayedColumns=['category','month','revenue'];
 Col='';
 addCol=false;
 font='';
 fontsize=20;
  textcolor='';
  fontcolor='';
  fonts=['Arial','Lucida Sans Unicode','Verdana','Courier New','Tahoma','Palatino Linotype','Impact','Georgia','Times New Roman'];
  sizes=['8','10','11','12','14','16','20','25','30']; 
apply=false;
cancel=false;
 onClickColumn(event:Event){
   this.addCol=true;
   this.Col=(<HTMLInputElement>event.target).value; 
 }
 onFonts(event:Event){
   this.font=(<HTMLInputElement>event.target).value; 
 }
 onFontSizes(event:Event){
  this.fontsize=+(<HTMLInputElement>event.target).value; 
}
onFontColors(event:Event){
  this.fontcolor=(<HTMLInputElement>event.target).value; 
}
onTextColors(event:Event){
  this.textcolor=(<HTMLInputElement>event.target).value; 
}
onClickApply(){
  this.apply=true;
  this.cancel=false;
}   
onClickCancel(){
  this.cancel=true;
  this.apply=false;
}
}
