import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  title = 'Pivot Table';
  _object=Object;
  len: number;
  i: number; 
  constructor (private httpService: HttpClient,@Inject(DOCUMENT) private document: any) { }
  show = false;
  show1=false;
  var1=1;
  var2=1;
  var3=1;
  var4=1;
  var5=1;
  var6=1;
  var7=1;
  var8=1;
  var9=1;
  var10=1;
  var11=1;
  var0=1;
  arrData;
  elem;
  NewField;
  //revenue=0;
  
  revenue = 0;
  r1;
  r2;
  r3;
  r4;
  r5;
  r6;
 quantity=0;
 q1;
 q2;
 q3;
 q4;
 q5;
 q6;
 sc=0;
 sc1;
 sc2;
 sc3;
 sc4;
 sc5;
 sc6;
 up=0;
 up1;
 up2;
 up3;
 up4;
 up5;
 up6;
 Field1;
 Field2;
 Field3;
 timesclicked=0;
 plus=0;
 plus1;
 plus2;
 plus3;
 plus4;
 plus5;
 plus6;

 minus=0;
 minus1;
 minus2;
 minus3;
 minus4;
 minus5;
 minus6;
 mul=0;
 mul1;
 mul2;
 mul3;
 mul4;
 mul5;
 mul6;
 divide=0;
 div1;
 div2;
 div3;
 div4;
 div5;
 div6;
 

Revenue ="Revenue";
Quantity="Quantity";
ShippingCost="ShippingCost";
UnitPrice="UnitPrice";
heroes = ["Category", "Revenue", "Month", "Customer","Order Id", "Payment Method", "Quantity","Region","Salesperson","Shipping Cost", "Unit Price"];





 // variables Ft Concerned on algorithm and edits by Prakhar Saxena 

 mean=0;
 median=0;
 colsum=0;
 ;
 show2=false;
 show3=false;
 //dataSize= this.arrData.length;
 //

 displatTable = 0;
 cv=0;
 op=0;
 displayVal="";
 calculatedValues : number[];
 noc=0;
 displayCacl = 0;
key;

 sumTimes = 0;
 agg_sum=0;
//  rev_sum=708785;
//  qua_sum=163550;
//  sc_sum=6001.5;
//  up_sum=781.78;
  arr:string[];
  types= new Array();t=false;
  displayedColumns:string[]; check=new Array();
  start = 0;
  display = false;
  showcase =0;
  ngOnInit () {
    this.httpService.get('./assets/appda.json').subscribe(
      data => {
        this.arr = data as string [];	
        this.displayedColumns=(this._object.keys(this.arr[0]));
        this.arrData = data ;	 // FILL THE ARRAY WITH DATA.
        this.len=this.displayedColumns.length;
          console.log(this.displayedColumns);
          for(this.i=0;this.i<this.len;this.i++){
            this.check.push(1);
            if((typeof(this.arr[0][this.displayedColumns[this.i]]))=='string'){
              this.types.push(1);
            }
            else{
              this.types.push(0);
            }
            }
            console.log(this.types);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.elem = document.documentElement;

}

close(){
  this.show1=false;
  this.show = false;
  this.displayVal="";
 
}


openFullscreen() {
  this.t=false;
  if (this.elem.requestFullscreen) {
    this.elem.requestFullscreen();
  } 
else if (this.elem.mozRequestFullScreen) {
    /* Firefox */
    this.elem.mozRequestFullScreen();
  } 
else if (this.elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    this.elem.webkitRequestFullscreen();
  } 
else if (this.elem.msRequestFullscreen) {
    /* IE/Edge */
    this.elem.msRequestFullscreen();
  }
}


  popUp()
  {
    this.t=true;
   this.show = !this.show;
   this.show1 = false;
  }
  popUp1(){
    this.show1 = !this.show1;
    this.show = false;
    this.t=false;
  }
  Close()
  {
    
  }
  toggleVisibility0(e){
    this.var0 = e.target.checked;
    this.start=1;
    this.displatTable=1;
   // this.cb=1;
    }
    
    changeType(e,i:number){
      if(e.target.checked){
      this.check[i]=1;
      }
      else{
        this.check[i]=0;
      }
      console.log(this.check);

    }
    

  toggleVisibility1(e,){
    this.var2= e.target.checked;
    this.start=1;
    this.displatTable=1;
    //this.cb=1;
    }
  toggleVisibility2(e){
    this.var2 = e.target.checked;
    this.start=1;
    this.displatTable=1;
   // this.cb=1;
      }
  toggleVisibility3(e){
    this.var3 = e.target.checked;
    this.start=1;
    this.displatTable=1;
    //this.cb=1;
      }
  toggleVisibility4(e){
    this.var4 = e.target.checked;
    this.start=1;
    this.displatTable=1;
   // this.cb=1;
      }
  toggleVisibility5(e){
    this.var5 = e.target.checked;
    this.start=1;
    this.displatTable=1;
   // this.cb=1;
      }
  toggleVisibility6(e){
    this.var6 = e.target.checked;
    this.start=1;
    this.displatTable=1;
   // this.cb=1;
      }
  toggleVisibility7(e){
    this.var7 = e.target.checked;
    this.start=1;
    this.displatTable=1;
    //this.cb=1;
      }
  toggleVisibility8(e){
    this.var8 = e.target.checked;
    this.start=1;
    this.displatTable=1;
    //this.cb=1;
      }
  toggleVisibility9(e){
    this.var9 = e.target.checked;
    this.start=1;
    this.displatTable=1;
   // this.cb=1;
      } 
  toggleVisibility10(e){
    this.var10 = e.target.checked;
    this.start=1;
    this.displatTable=1;
    //this.cb=1;
      }
  toggleVisibility11(e){
    this.var11 = e.target.checked;
    this.start=1;
    this.displatTable=1;
    //this.cb=1;}
    
  
}




addHero(newHero: string) {
  if (newHero) {
    this.NewField = newHero; 
    this.displayedColumns.push(newHero);
  }
}
selected1='';
selected2='';
Select(i:number)
{
  let count=-1;
  for(let x of this.displayedColumns) 
  
  { count=count+1;
    if(count==i) {
      if(this.selected1=='')
  {
    this.selected1 = x;
    this.displayVal = this.displayVal + this.selected1;
  }
  else{
    this.selected2=x;
    this.displayVal = this.displayVal + this.selected2;
  }
  }
}

console.log("qwerty" + i + this.selected1 + this.selected2);

}

operator ;
Operator(op:string)
{console.log("operator called");
this.operator=op;
this.displayVal = this.displayVal + this.operator;
}


Callu()
{console.log(this.operator);
  if(this.operator=='+'){
        this.arr.forEach(element => {
          //console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
        element[this.displayedColumns[this.displayedColumns.length-1]] =  element[this.selected1]+element[this.selected2];
        console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
           });
     }
     if(this.operator=='-'){
      this.arr.forEach(element => {
        //console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
      element[this.displayedColumns[this.displayedColumns.length-1]] =  element[this.selected1]-element[this.selected2];
      console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
         });
   }
   if(this.operator=='*'){
    this.arr.forEach(element => {
      //console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
    element[this.displayedColumns[this.displayedColumns.length-1]] =  element[this.selected1]*element[this.selected2];
    console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
       });
 }
 if(this.operator=='/'){
  this.arr.forEach(element => {
    //console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
  element[this.displayedColumns[this.displayedColumns.length-1]] =  element[this.selected1]/element[this.selected2];
  console.log(element[this.displayedColumns[this.displayedColumns.length-1]]);
     });
}
if(this.operator=='mean'){
 this.Mean(this.selected1);
 //console.log(this.selected1);
}
if(this.operator=='median')
{
  this.Median(this.selected1);
}
}



 arrSize=0;
 meanCol=0;
 Clear(){
  this.sc1=this.up1=this.q1=0,this.r1=0;
  this.displayVal=" ";
  this.show2=false;
  this.show3=false;
  this.selected2="";
  this.selected1="";
  this.operator='';
 }

  Mean(coloumn){
    this.mean=1;
    this.show3=true;
  
   // console.log(coloumn);
  
    //    this.sc1=this.up1=this.r1=0;  
        this.colsum=0; 
         this.arrData.forEach(element => {
         
          this.colsum = this.colsum + element[coloumn];
          this.arrSize++;
          console.log(this.colsum );
         });
    



      this.meanCol=this.colsum/this.arrSize;
     // console.log(this.colsum + '.' + this.meanCol);
      
    
  }

medin(values: any[]) {

    values.sort( function(a,b) {return a - b;} );
    console.log(values);
    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
  }

list1 = new Array(0); 
Median(coloumn){
    this.median=1;
    this.show2=true;

    this.colsum=0; 
         this.arrData.forEach(element => {
          this.list1.push(element[coloumn]);
         // this.colsum = this.colsum + element[coloumn];
          this.arrSize++;
          console.log(element[coloumn]);
         });
   
   
    
    

      this.meanCol= this.medin(this.list1);
      console.log(this.meanCol);
      this.r1=this.sc1=this.up1=this.q1=0;
    
  }



value=0;

obj={};

}