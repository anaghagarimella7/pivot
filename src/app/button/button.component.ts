import { Component, OnInit } from '@angular/core';
//import { runInThisContext } from 'vm';
import {data } from './data';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  displayedColumns: string[]= [ 'category', 'month','revenue'];
  dataSource= ELEMENT_DATA;
  allownewbutton=false;
  buttonCategory=false;
  buttonMonth=false;
  buttonRevenue=false;
  buttonClick='false';
  col=['c','m','r'];
  thousandSep=[',','.'];
  decimals=[1,2,3,4,5];
  format=false;
  condition=false;
  columnName='';
  alignment='';
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
  op1='>';
  op2='>';
  val1=0;
  val2=0;
  font1='';
  font2='';
  fontsize1=20;
  fontsize2=20;
  fontcolor1='';
  fontcolor2='';
  textcolor1='';
  textcolor2='';
  revenueApply=false;
  revenueCancel=false;
  categoryApply=false;
  categoryCancel=false;
  monthApply=false;
  monthCancel=false;
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
  
  d=this.dat[0];

  constructor() { 
    
  }

  ngOnInit() {
  }


  onClick(){
    this.buttonClick='true';
  
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
 }
  onAlignSelect(event: Event){
    this.alignment=(<HTMLInputElement>event.target).value;
   }
   onThousandSelect(event: Event){
    this.thousandSeperator=(<HTMLInputElement>event.target).value;
   }
   onDecimalSelect(event: Event){
    this.decimalSeperator=(<HTMLInputElement>event.target).value;
   }
   onDecimalPlaceSelect(event: Event){
     console.log(event)
    this.decimalPlace=((<HTMLInputElement>event.target).value);
   }
   onCurrency(event:Event){
    this.currency=(<HTMLInputElement>event.target).value; 
   }
   onCurrencyAlignment(event:Event){
    this.currencyAlignment=(<HTMLInputElement>event.target).value; 
   }
   onFormatAsPercentage(event:Event){
     this.formatAsPercent=(<HTMLInputElement>event.target).value; 
   }

   onClickConditionApply(){
      this.buttonConditionApply=true;
      this.buttonConditionCancel=false;
      this.buttonFormatApply=false;
      this.buttonFormatCancel=false;
   }
   onClickConditionCancel(){
     this.buttonConditionCancel=true;
     this.buttonConditionApply=false;
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
  }
  onOp1(event:Event){
    this.op1=(<HTMLInputElement>event.target).value; 
  }
  onVal1(event:Event){
   this.val1=+(<HTMLInputElement>event.target).value; 
  }
  onOp2(event:Event){
    this.op2=(<HTMLInputElement>event.target).value; 
  }
  onCol2(event:Event){
    this.col2=(<HTMLInputElement>event.target).value; 
  }
  onVal2(event:Event){
    this.val2=+(<HTMLInputElement>event.target).value; 
   }

   onFont1(event:Event){
     this.font1=(<HTMLInputElement>event.target).value; 
   }
   onFontSize1(event:Event){
    this.fontsize1=+(<HTMLInputElement>event.target).value;
   }
   onFontSize2(event:Event){
    this.fontsize2=+(<HTMLInputElement>event.target).value;
  }

   onFontColor1(event:Event){
      this.fontcolor1=(<HTMLInputElement>event.target).value; 
    }
    onFontColor2(event:Event){
      this.fontcolor2=(<HTMLInputElement>event.target).value; 
    }
    onTextColor1(event:Event){
      this.textcolor1=(<HTMLInputElement>event.target).value; 
    }
    onTextColor2(event:Event){
      this.textcolor2=(<HTMLInputElement>event.target).value; 
    }
   
    onFont2(event:Event){
    this.font2=(<HTMLInputElement>event.target).value; 
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