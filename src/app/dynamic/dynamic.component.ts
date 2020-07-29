import { Component, OnInit,Renderer2 } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTable } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import {DialogLabelComponent} from '../dialog-label/dialog-label.component';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import {AlertService} from '../_alert';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css','./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  arr:string[];
  types= new Array();
 _object=Object;  dataSource ; condition=false; 
 _ob=Object; alert=false;
 
  alignment="left"; click=false; color=""; i=0; len=0;col="Revenue";str="";onlyText=true;ot=-1;
  operators=['>','<','<=','>=','='];
  operators2=['<','<=','>=','=','>']
  fonts=['Arial','Lucida Sans Unicode','Verdana','Courier New','Tahoma','Palatino Linotype','Impact','Georgia','Times New Roman'];
  sizes=['8','10','11','12','14','16','20','25','30']; 
  col1='';
  col2=''; value=0;operator='';label=''; string;s='';l='';o='';v=0;  column='';
  columnName=''; dialogColumn='';formatColumn='';resetbutton=false;
  thousandSeperator=',';  decimalSeperator='.';  decimalPlace='2';  formatAsPercent='false';  currency='$';
  currencies=['$','&','*','#','@']; decimals=[1,2,3,4,5];thousandSep=[',','None'];
  op1='>';  op2='>';  val1=0;  val2=0;  font1='';  font2='';  Col=''; buttonDialog=false;
 addCol=false;
 font='';w;
 fontsize=20;
  textcolor='';  fontcolor='';  fontsize1=20; sample=false;
  fontsize2=20;
  fontcolor1='';
  fontcolor2='';
  textcolor1='';
  textcolor2='';
  apply=false; format=false;buttonWidth=false;
  cancel=false;
  home=false; c;m;
   d=false;
  monthApply=false;currencyAlignment='left';
  monthCancel=false;
  addColumn=false; buttonConditionApply=false;
  buttonConditionCancel=false;
  buttonFormatApply=false;
  buttonFormatCancel=false;colourcell='';
  buttonNumericFormat=false;
  buttonNonNumericFormat=false;

 displayedColumns:string[];
  constructor(private alertService:AlertService,private httpService: HttpClient,private dialog: MatDialog,private renderer: Renderer2) { }
  error(message: string) {
    this.alertService.error(message);
  }
  ngOnInit() {
    this.httpService.get('./assets/appda.json').subscribe(
      data => {
        this.arr = data as string [];	
        this.displayedColumns=(this._object.keys(this.arr[0]))
     //   this.dataSource=new MatTableDataSource(this.arr);
        //for(this.i=0;this.i<this.arr.length;this.i++){
          //console.log(this.arr[this.i])
        //}
        this.dataSource=this.arr;
        this.len=this.displayedColumns.length;
        console.log(this.arr.length);
       // console.log(typeof(this.arr[0]));
        for(this.i=0;this.i<this.len;this.i++){
        if((typeof(this.arr[0][this.displayedColumns[this.i]]))=='string'){
          this.types.push(1);
        }
        else{
          this.types.push(0);
        }
        }
        console.log(this.types)
        

      //this.dataSource.sort = this.sort;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
}
onResizeColumn(event:Event,i:number){
//  console.log(event.target.clientWidth);
  
}
dialogs(){
  this.buttonDialog=true;this.ot=-1;
  this.condition=false;
  this.format=false;
  this.buttonConditionApply=false; this.d=false;this.buttonFormatApply=false;
}
eve(event:Event){
  console.log("clicked")
  console.log(event);
}
onclick(event:Event,i:number){
this.click=true;
this.d=true;
console.log(i);
this.dialogColumn=this.displayedColumns[i];
if(this.types[i]!=1){
this.onlyText=false; 
console.log("this is a number");
this.openDialog();
}
else{
  this.onlyText=true;
  this.openDialog2();
}

}
openWidth(){
  this.buttonWidth=true;
}

onWidth(event:Event){
this.w=+(<HTMLInputElement>event.target).value;
}
reset(){
  this.resetbutton=true;
  this.dialogColumn='';
}

onClickFormatCancel(){
  this.buttonFormatApply=false;
}
onclick1(event:Event,i:number){
  this.format=false;
  this.formatColumn=this.displayedColumns[i];
  if(this.types[i]!=1){
    this.onlyText=false;this.ot=0;
  }
  else{
    this.onlyText=true;this.ot=1;
  }
}
onClickFormatApply(){
  this.buttonFormatApply=true;
}

openDialog() {
  
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={
        operators:['<','>','=','>=','<=','!='],
        value: this.value,
        operator:this.operator,
        backdropClass:'backdropBackground'
      }
      const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  
      //this.dialog.open(CourseDialogComponent, dialogConfig);
      console.log(dialogConfig.data.operator);
  
  
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //console.log(dialogConfig.data.value);
    this.o=dialogConfig.data.operator;
    this.v=dialogConfig.data.value;
    if(this.o==''||this.o==' '){
      this.o='<';
    }
    if(this.v==0){
      this.error("Enter a valid number");
      this.dialogColumn='';
    }
    console.log(this.o+" "+this.v);
  });
    
  }
  
  openDialog2(){
  
    const dialogConfig2 = new MatDialogConfig();
  
    dialogConfig2.disableClose = true;
    dialogConfig2.autoFocus = true;
    dialogConfig2.data={
      strings:["Equal","Not Equal","Begin","Not Begin","End","Not End","Contain","Not Contain","Greater","Smaller"],
      label: this.label,
      string:this.string
    }
    const dialogRef2 = this.dialog.open(DialogLabelComponent, dialogConfig2);
    
  dialogRef2.afterClosed().subscribe(result => {
    console.log('The dialog2 was closed');
    //console.log(dialogConfig2.data.label+" "+dialogConfig2.data.string);
    this.s=dialogConfig2.data.string;
    if(this.s==undefined){
      this.s="Equal";
    }
    this.l=dialogConfig2.data.label;
    if(this.l==' '||this.l==''){
      this.error("Enter a valid string");
      this.dialogColumn='';
      return;
    }
    console.log(this.s+" "+this.l);
  });
  }
  checkEqual(input:string,string2:string){
    
    string2=string2.toLocaleLowerCase()
  
    if(input.toLocaleLowerCase()==(string2)){
      return true;
    }
    else{
      return false;
    }
  }
  
  checkBegin(input:string,s:string){
    s=s.toLocaleLowerCase()
    if(input.toLocaleLowerCase().startsWith(s)){
     return true;
    }
    else{
      return false;
    }
  }
  checkNotBegin(input:string,s:string){
    if(!input.toLocaleLowerCase().startsWith(s)){
      return true;
    }
    else{
      return false;
    }
  }
  
  checkEnd(input:string,s:string){
    s=s.toLocaleLowerCase()
  
    if(input.toLocaleLowerCase().endsWith(s)){
      return true;
    }
    else{
      return false;
    }
  }
  checkNotEnd(input:string,s:string){
    if(!input.endsWith(s)){
      return true;
    }
    else{
      return false;
    }
  }
  
  checkContain(input:string,s:string){
    s=s.toLocaleLowerCase()
  
    if(input.toLocaleLowerCase().search(s)!=-1){
      return true;
  
    }
    else{
      return false;
    }
    }
  
    checkGreater(input:string,s:string){
      s=s.toLocaleLowerCase();
      if(input.toLocaleLowerCase().localeCompare(s)==1){
        return true;
      }
      else{
        return false;
      }
    }
    checkSmaller(input:string,s:string){
      s=s.toLocaleLowerCase();
      if(input.toLocaleLowerCase().localeCompare(s)==-1){
        return true;
      }
      else{
        return false;
      }
    }
    
Condition(){
  this.sample=true;
  this.condition=true;this.ot=-1;
  this.format=false; this.buttonConditionApply=false;
  this.buttonDialog=false;this.d=false;this.buttonFormatApply=false;
}
Format(){
  
  this.format=true;this.ot=-1;
  this.condition=false;this.d=false;
  this.buttonDialog=false;
  this.buttonConditionApply=false;this.buttonFormatApply=false;
}
conditionApply(){
  this.buttonConditionApply=true;
  this.condition=false;
  
}
conditionCancel(){
  this.buttonConditionApply=false;
}
onAdd(){
  this.addCol=true;
}
onClickColumn(event:Event){
    
  this.Col=(<HTMLInputElement>event.target).value; 
  if(this.Col==this.col1 || this.Col==this.col2){
    this.error("Conditional Formatting already applied to the selected column");
    this.alert=true;
  }
  this.buttonConditionApply=false;
}
onFonts(event:Event){
  this.font=(<HTMLInputElement>event.target).value; 
  this.buttonConditionApply=false;
  
  
}
onFontSizes(event:Event){
 this.fontsize=+(<HTMLInputElement>event.target).value; 
 this.buttonConditionApply=false;
 

}
onFontColors(event:Event){
 this.fontcolor=(<HTMLInputElement>event.target).value; 
 this.buttonConditionApply=false;

}
onTextColors(event:Event){
 this.textcolor=(<HTMLInputElement>event.target).value; 
 this.buttonConditionApply=false;
 
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
   if(this.op1==this.op2 || (this.op1=='>' && this.op2=='>=')||(this.op1=='<' && this.op2=='<=')){
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
 if(this.op1==this.op2|| (this.op1=='>' && this.op2=='>=')||(this.op1=='<' && this.op2=='<=')){
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
setDisplatedCols(){
  this.dataSource;

}

}

