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
 displatTable = 0;
 cv=0;
 op=0;
 displayVal="";
 calculatedValues : number[];
 noc=0;
 displayCacl = 0;
key;
Revenue ="Revenue";
Quantity="Quantity";
ShippingCost="ShippingCost";
UnitPrice="UnitPrice";
 sumTimes = 0;
 agg_sum=0;
 rev_sum=708785;
 qua_sum=163550;
 sc_sum=6001.5;
 up_sum=781.78;
  heroes = ["Category", "Revenue", "Month", "Customer","Order Id", "Payment Method", "Quantity","Region","Salesperson","Shipping Cost", "Unit Price"];
 
  start = 0;
  display = false; displayedColumns:string[];
  _object=Object;
  showcase =0;  types=new Array();

  ngOnInit () {
    this.httpService.get('./assets/appda.json').subscribe(
      data => {
        this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.displayedColumns=(this._object.keys(this.arrData[0]))
        for(var i=0;i<this.displayedColumns.length;i++){
          this.types.push(0);
        }
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.elem = document.documentElement;

}
ValueChanged(e,i:number){
  if(e.checked){
    this.types[i]=1;
  }
  else{
    this.types[i]=0;
  }
  console.log(e.checked+" "+i+this.types);
}
addHero(newHero: string) {
  if (newHero) {
    this.NewField = newHero; 
    this.heroes.push(newHero);
  }
}
  openFullscreen() {
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
   this.show = !this.show;
   this.show1 = false;

  }
  popUp1(){
    this.show1 = !this.show1;
    this.show = false;
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

  toggleVisibility1(e){
    this.var1 = e.target.checked;
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
R()
  {
    
      if(this.quantity==0 && this.sc==0 && this.up==0)
      {
      this.revenue = 1;
        this.displayVal = this.displayVal + "Revenue";
    }
    else
      {
        this.revenue = 2;
        this.displayVal = this.displayVal + " Revenue";
      }

    
    
   
    
  /*if(this.agg_sum==1){
    this.revenue =3;
    this.agg_sum=0;
    this.displayVal = this.displayVal + "Sum(Revenue)";
  } */
    
    //alert("You Selected Revenue");
    this.cv++;
  }
  Q()
  {
    
      if(this.revenue==0 && this.sc==0 && this.up==0)
    {
      this.quantity = 1;
      this.displayVal=this.displayVal+"Quantity"
    }
    else
    {
      this.quantity = 2;
      this.displayVal=this.displayVal+" Quantity"
    }

    
  
    
     /*if(this.agg_sum==1){
      this.quantity =3;
      this.agg_sum=0;
      ////this.agg_sum = this.agg_sum + this.qua_sum;
      this.displayVal = this.displayVal + "Sum(Quantity)";
    }*/
    
   
    
    //alert("You Selected Quantity");
    this.cv++;
  }
  SC(){
    if(this.revenue==0 && this.quantity==0 && this.up==0)
    {
      this.sc = 1;
      this.displayVal=this.displayVal+"Shipping Cost";
    }
    else
    {
      this.sc = 2;
    this.displayVal=this.displayVal+" Shipping Cost";
    }
    
     if(this.agg_sum==1){
      this.sc =3;
      this.agg_sum=0;
     // this.agg_sum = this.agg_sum + this.sc_sum;
      this.displayVal = this.displayVal + "Sum(Shipping Cost)";
    }
    
    
    //alert("You Selected Shipping Cost");
    this.cv++;
  }
  UP(){
    if(this.revenue==0 && this.quantity==0 && this.sc==0)
    {
      this.up = 1;
      this.displayVal=this.displayVal+"Unit Price";
    }
    else
    {
      this.up = 2;
      this.displayVal=this.displayVal+" Unit Price";
    }
     if(this.agg_sum==1){
      this.up =3;
      this.agg_sum=0;
      //this.agg_sum = this.agg_sum + this.up_sum;
      this.displayVal = this.displayVal + "Sum(Unit Price)";
    }
   
   
    this.cv++;
    //alert("You Selected Unit Price");
  }
  Sum(){
    this.agg_sum=1;
    this.cv++;
    this.sumTimes++;
    alert("Sum");
  }
  Plus(){
    this.plus=1;
    this.displayVal=this.displayVal+" + ";
    this.op++;
    
    //alert("You Selected +")
    
  }
  Minus()
  {
    this.minus = 1;
    this.displayVal=this.displayVal+" - ";
    this.op++;
    //alert("You Selected -")
  }
  Mul(){
    this.mul =1;
    this.displayVal=this.displayVal+" x ";
    this.op++;
    //alert("You Selected *")
  }
  Divide(){
    this.divide = 1;
    this.displayVal=this.displayVal+" / ";
    this.op++;
    //alert("You Selected /")
  }
Calculate(){
  var re = /RevenueRevenue/gi;
 if(this.displayVal.search(re) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re1 =  /Revenue Quantity/gi;
 if(this.displayVal.search(re1) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re2 =  /Revenue Shipping Cost/gi;
 if(this.displayVal.search(re2) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re3 =  /Revenue Unit Price/gi;
 if(this.displayVal.search(re3) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re4 =  /--/gi;
 if(this.displayVal.search(re4) != -1 )
 {
   alert("Invalid Formula: Two operators together");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re5 =  /xx/gi;
 if(this.displayVal.search(re5) != -1 )
 {
   alert("Invalid Formula: Two operators together");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re6 =  /Quantity Revenue/gi;
 if(this.displayVal.search(re6) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re7 =  /Quantity Shipping Cost/gi;
 if(this.displayVal.search(re7) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re8 =  /Quantity Unit Price/gi;
 if(this.displayVal.search(re8) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re9 =  /Shipping Cost Revenue/gi;
 if(this.displayVal.search(re9) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re10 =  /Shipping Cost Quantity/gi;
 if(this.displayVal.search(re10) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re11 =  /Shipping CostShipping Cost/gi;
 if(this.displayVal.search(re11) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 var re12 =  /Shipping Cost Unit Price/gi;
 if(this.displayVal.search(re12) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re13 =  /Unit Price Revenue/gi;
 if(this.displayVal.search(re13) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re14 =  /Unit Price Quantity/gi;
 if(this.displayVal.search(re14) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re15 =  /Unit Price Shipping Cost/gi;
 if(this.displayVal.search(re15) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re16 =  /Unit PriceUnit Price/gi;
 if(this.displayVal.search(re16) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }

 var re17 =  /QuantityQuantity/gi;
 if(this.displayVal.search(re17) != -1 )
 {
   alert("Inavlid Formula: operator missing");
   this.revenue=0;
   this.quantity=0;
   this.sc=0;
   this.up=0;
   this.plus=0;
   this.minus=0;
   this.mul=0;
   this.divide=0;
   this.displayVal=" ";
   this.timesclicked--;
 }
 
 

 
 





 
  this.display = !this.display;
  this.showcase = 1;
  this.displayVal="";
  if(this.timesclicked==0)
  {
    if(this.NewField!="")
    this.Field1= this.NewField;
    else
    this.Field1="New Added Field";
    if(this.plus==1)
    this.plus1=1;
    if(this.minus==1)
    this.minus1=1;
    if(this.mul==1)
    this.mul1=1;
    if(this.divide==1)
    this.div1=1;
    if(this.revenue==1)
    this.r1=1;
    if(this.revenue==2)
    this.r1=2;
    if(this.quantity==1)
    this.q1=1;
    if(this.quantity==2)
    this.q1=2;
    if(this.sc==1)
    this.sc1=1;
    if(this.sc==2)
    this.sc1=2;
    if(this.up==1)
    this.up1=1;
    if(this.up==2)
    this.up1=2;
    this.displayCacl=1;
  }
  if(this.timesclicked==1)
  {
    if(this.NewField!="")
    this.Field2= this.NewField;
    else
    this.Field2="New Added Field";
    if(this.plus=1)
    this.plus2=1;
    if(this.minus==1)
    this.minus2=1;
    if(this.mul==1)
    this.mul2=1;
    if(this.divide==1)
    this.div2=1;
    if(this.revenue==1)
    this.r2=1;
    if(this.revenue==2)
    this.r2=2;
    if(this.quantity==1)
    this.q2=1;
    if(this.quantity==2)
    this.q2=2;
    if(this.sc==1)
    this.sc2=1;
    if(this.sc==2)
    this.sc2=2;
    if(this.up==1)
    this.up2=1;
    if(this.up==2)
    this.up2=2;

    this.r1=0;
    this.q1=0;
    this.sc1=0;
    this.up1=0;
  
  }
  if(this.timesclicked==2)
  {
    if(this.NewField!="")
    this.Field3= this.NewField;
    else
    this.Field3="New Added Field";
    if(this.plus=1)
    this.plus3=1;
    if(this.minus==1)
    this.minus3=1;
    if(this.mul==1)
    this.mul3=1;
    if(this.divide==1)
    this.div3=1;
    if(this.revenue==1)
    this.r3=1;
    if(this.revenue==2)
    this.r3=2;
    if(this.quantity==1)
    this.q3=1;
    if(this.quantity==2)
    this.q3=2;
    if(this.sc==1)
    this.sc3=1;
    if(this.sc==2)
    this.sc3=2;
    if(this.up==1)
    this.up3=1;
    if(this.up==2)
    this.up3=2;
    this.r2=0;
    this.q2=0;
    this.sc2=0;
    this.up2=0;
  }
  this.revenue=0;
  this.quantity=0;
  this.sc=0;
  this.up=0;
  //this.plus=0;
  this.minus=0;
  this.mul=0;
  this.divide=0;
  this.timesclicked++;
 
  if(this.cv==0)
  alert("Pls select Fields");
  if(this.cv==1)
  alert("Please select a field");
  if(this.op==0)
  alert("Pls select an operator");
 
}
close(){
  this.show1=false;
  this.show = false;
  this.displayVal="";
 
}
}
