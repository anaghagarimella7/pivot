import { Component, OnInit } from '@angular/core';
//import { runInThisContext } from 'vm';
import {data } from './data';
import {AlertService} from '../_alert';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css','./button.component.scss']
})
export class ButtonComponent implements OnInit {
  displayedColumns: string[]= [ 'category', 'month','revenue'];
  dataSource= ELEMENT_DATA;
  allownewbutton=false;
  buttonCategory=false;
  count=0;
  countbefore=-1;
  buttonMonth=false;
  buttonRevenue=false;
  buttonClick=false;
  col=['c','m','r'];
  thousandSep=[',','None'];
  decimals=[1,2,3,4,5];
  format=false;
  condition=false;
  columnName='';
  alignment='left';
  thousandSeperator=',';
  decimalSeperator='.';
  decimalPlace='2';
  formatAsPercent='false';
  currency='$';
  currencies=['$','&','*','#','@'];
  operators=['>','<','<=','>=','='];
  fonts=['Arial','Lucida Sans Unicode','Verdana','Courier New','Tahoma','Palatino Linotype','Impact','Georgia','Times New Roman'];
  sizes=['8','10','11','12','14','16','20','25','30']; 
  buttonConditionApply=false;
  buttonConditionCancel=false;
  buttonFormatApply=false;
  buttonFormatCancel=false;
  buttonNumericFormat=false;
  buttonNonNumericFormat=false;
  currencyAlignment='left';
  col1='';
  col2='';
  column='';
  op1='>';
  op2='>';
  val1=0;
  val2=0;
  font1='';
  font2='';
  Col='category';
 addCol=false;
 font='';
 fontsize=20;
  textcolor='';
  fontcolor='';
  fontsize1=20;
  fontsize2=20;
  fontcolor1='';
  fontcolor2='';
  textcolor1='';
  textcolor2='';
  apply=false;
  cancel=false;
  revenueApply=false;
  home=false;
  revenueCancel=false;
  categoryApply=false;
  categoryCancel=false;
  monthApply=false;
  monthCancel=false;
  addColumn=false;
  alert=false;
  m=false;
  sample=true;
  c=false;
  mfont=20;  mfamily='';  mbcolor='';  mtcolor='';
  cfont=20;  cfamily='';  cbcolor='';ctcolor='';
    dat=[
    new data('FruitPreserves','April',3950.00),
    new data('Soups','April',1260.00),
    new data('BreakfastCereals','April',3555.00),
    new data('Bakery','April',5250.00),
    new data ('Confectionery','April',2487.50),
    new data('FruitPreserves','April',987.50),
    new data('Condiments','March',3825.00),
    new data('BreakfastCereals','March',3950.00),
    new data('Bakery','March',3937.50)
  ];
  arr:string[];
  d=this.dat[0];

  constructor(private alertService:AlertService,private httpService: HttpClient,) { 
    
  }
  error(message: string) {
    this.alertService.error(message);
  }
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
  onClickHome(){
    this.home=true;
  }
  onAdd(){
    this.addCol=true;
  }
  onClickColumn(event:Event){
    
    this.Col=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
    if(this.Col=='category'){
      this.c=true;
    }
    if(this.Col=='month'){
      this.m=true;
    }

  }
  onFonts(event:Event){
    this.font=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
    if(this.Col=='category'){
      this.cfamily=this.font;
    }
    if(this.Col=='month'){
      this.mfamily=this.font;
    }
    
  }
  onFontSizes(event:Event){
   this.fontsize=+(<HTMLInputElement>event.target).value; 
   this.buttonConditionApply=false;
   if(this.Col=='category'){
    this.cfont=this.fontsize;
  }
  if(this.Col=='month'){
    this.mfont=this.fontsize;
  }

 }
 onFontColors(event:Event){
   this.fontcolor=(<HTMLInputElement>event.target).value; 
   this.buttonConditionApply=false;
   if(this.Col=='category'){
    this.cbcolor=this.fontcolor;
  }
  if(this.Col=='month'){
    this.mbcolor=this.fontcolor;
  }
 }
 onTextColors(event:Event){
   this.textcolor=(<HTMLInputElement>event.target).value; 
   this.buttonConditionApply=false;
   if(this.Col=='category'){
    this.ctcolor=this.textcolor;
  }
  if(this.Col=='month'){
    this.mtcolor=this.textcolor;
  }
 }
 
 
 /* onClick(){
    this.buttonClick=true;
    this.home=false;
    this.format=false;
    this.condition=false;
    this.addCol=false;
    this.buttonCategory=false;
    this.buttonMonth=false;
    this.buttonRevenue=false;
    this.buttonConditionApply=false;
    this.buttonFormatApply=false;
  
  }
*/
  onAddColumn(){
    this.addColumn=true;
  }
   onClickCondition(){
     this.condition=true;
  this.format=false;
  this.buttonFormatApply=false;
  this.buttonRevenue=false;
   this.buttonMonth=false;
   this.buttonCategory=false;
   this.revenueApply=false;
   this.categoryApply=false;
   this.addCol=false;
   this.buttonConditionApply=false;
   
 }
   onClickFormat(){
   this.format=true;
   this.condition=false;
   this.buttonConditionApply=false;
   this.buttonRevenue=false;
   this.buttonMonth=false;
   this.buttonCategory=false;
   this.revenueApply=false;
   this.categoryApply=false;
   this.buttonFormatApply=false;
   this.addCol=false;
 }
 onClickFormatRevenueApply(){
   this.revenueApply=true;
   this.revenueCancel=false;
   this.columnName='revenue';
   this.format=false;
 }
 onClickFormatRevenueCancel(){
  this.revenueApply=false;
  this.revenueCancel=true;
  this.columnName='';
}
onClickFormatMonthApply(){
  this.monthApply=true;
  this.monthCancel=false;
  this.columnName='month';
  this.format=false;
  
}
onClickFormatMonthCancel(){
  this.monthCancel=true;
  this.monthApply=false;
  this.columnName='';
}
onClickFormatCategoryApply(){
  this.categoryApply=true;
  this.categoryCancel=false;
  this.columnName='category';

}
onClickFormatCategoryCancel(){
  this.categoryApply=false;
  this.categoryCancel=true;
  this.columnName='';
}

 
 onButtonMonth(){
   this.buttonMonth=true;
   this.columnName='month';
   this.buttonRevenue=false;
  this.buttonCategory=false;
   this.format=false;

 }
 onButtonCategory(){
  this.buttonCategory=true;
  this.columnName='category';
  this.buttonRevenue=false;
  this.format=false;
  this.buttonMonth=false;

}
 onButtonRevenue(){
   this.buttonRevenue=true;
   this.columnName='revenue';
   this.buttonMonth=false;
   this.format=false;
 }
  onColumnSelect(event: Event){
  this.columnName=(<HTMLInputElement>event.target).value;
  this.buttonFormatApply=false;

 }
  onAlignSelect(event: Event){
    this.alignment=(<HTMLInputElement>event.target).value;
    this.buttonFormatApply=false;

   }
   onThousandSelect(event: Event){
    this.thousandSeperator=(<HTMLInputElement>event.target).value;
    this.buttonFormatApply=false;

   }
   onDecimalSelect(event: Event){
    this.decimalSeperator=(<HTMLInputElement>event.target).value;
    this.buttonFormatApply=false;

   }
   onDecimalPlaceSelect(event: Event){
     console.log(event)
    this.decimalPlace=((<HTMLInputElement>event.target).value);
    this.buttonFormatApply=false;

   }
   onCurrency(event:Event){
    this.currency=(<HTMLInputElement>event.target).value; 
    this.buttonFormatApply=false;

   }
   onCurrencyAlignment(event:Event){
    this.currencyAlignment=(<HTMLInputElement>event.target).value; 
    this.buttonFormatApply=false;

   }
   onFormatAsPercentage(event:Event){
     this.formatAsPercent=(<HTMLInputElement>event.target).value; 
     this.buttonFormatApply=false;
   }

   onClickConditionApply(){
       this.count=this.count+1;
      this.buttonConditionApply=true;
       this.buttonConditionCancel=false;
      this.buttonFormatApply=false;
      this.buttonFormatCancel=false;
      this.sample=false;
   }
   onClickConditionCancel(){
     this.buttonConditionCancel=true;
     this.buttonConditionApply=false;
     this.sample=true;
   }
   onClickFormatApply(){
    this.buttonFormatApply=true;
    this.buttonFormatCancel=false;
    this.buttonConditionApply=false;
    this.buttonConditionCancel=false;

 }
 
 onClickFormatCancel(){
   this.buttonFormatCancel=true;
   this.buttonFormatApply=false;
 }
 
   onCol1(event:Event){
    this.col1=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
    this.buttonConditionCancel=true;
  }
  onOp1(event:Event){
    this.alert=false;

    this.op1=(<HTMLInputElement>event.target).value;    
     this.buttonConditionApply=false;
     this.buttonConditionCancel=true;
     if(this.op1==this.op2){
      this.error("Operations can't be performed; Choose valid operators");
      this.alert=true;
    }
  }
  onVal1(event:Event){
   this.val1=+(<HTMLInputElement>event.target).value; 
   this.buttonConditionApply=false;
   this.buttonConditionCancel=true;

  }
  onOp2(event:Event){
    this.alert=false;
    this.op2=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
   if(this.op1==this.op2){
     this.error("Operations can't be performed; Choose valid operators");
     this.alert=true;
   }
   
   
  }
  onCol2(event:Event){
    this.col2=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
  }
  onColumn(event:Event){
    this.column=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
  }
  onVal2(event:Event){
    this.val2=+(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
   }

   onFont1(event:Event){
     this.font1=(<HTMLInputElement>event.target).value; 
     this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
   }
   onFontSize1(event:Event){
    this.fontsize1=+(<HTMLInputElement>event.target).value;
    this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
   }
   onFontSize2(event:Event){
    this.fontsize2=+(<HTMLInputElement>event.target).value;
    this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
  }

   onFontColor1(event:Event){
      this.fontcolor1=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
    }
    onFontColor2(event:Event){
      this.fontcolor2=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
    }
    onTextColor1(event:Event){
      this.textcolor1=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
    }
    onTextColor2(event:Event){
      this.textcolor2=(<HTMLInputElement>event.target).value; 
      this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
    }
    
   
    onFont2(event:Event){
    this.font2=(<HTMLInputElement>event.target).value; 
    this.buttonConditionApply=false;
   this.buttonConditionCancel=true;
  }
}

export interface matdata{
  category:string;
  month:string;
  revenue:number;
}

const ELEMENT_DATA: matdata[]=[
  {category:'Bakery', month:'April', revenue: 3950},
  {category:'Fruit', month:'April', revenue: 1260},
  {category:'Cereals', month:'April', revenue: 3555},
  {category:'Cinnamon', month:'April', revenue: 5250},
  {category:'Bakery', month:'April', revenue: 2487},
  {category:'Bakery', month:'April', revenue: 987.5},
  {category:'Bakery', month:'April', revenue: 3825},
  {category:'Bakery', month:'April', revenue: 3950},
  {category:'Bakery', month:'April', revenue: 3937.5},

]