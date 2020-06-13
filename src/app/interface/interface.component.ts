import { Component,ViewChild, OnInit,AfterViewInit, ElementRef, HostListener,Renderer2 } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatDialog, MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import {DialogLabelComponent} from '../dialog-label/dialog-label.component';
import {DialogMonthComponent} from '../dialog-month/dialog-month.component';
@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  arr:string[];
  displayedColumns: string[] = ['position', 'Category', 'Month', 'Revenue',];
  _object = Object;

  @ViewChild(MatSort, {static: true},) sort: MatSort;
  @ViewChild(MatTable, {read: ElementRef, static:true}  ) private matTableRef: ElementRef;
  o='=';
  v=2500;
  dataSource ;
  columns: any[] = [
    { field: 'position', width: 50, },

    { field: 'Category', width: 250, },
    { field: 'Month', width: 350, },
    { field: 'Revenue', width: 100, }
  ];
  applyFilter(filterValue:string){
this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
  }
  filterValues = {};
  filterSelectObj = [];
 value;
 w=100;
 operator;
 buttonName;
 string;
 label;s;l;s2;l2;
 column1=false; olumn2=false;column3=false;column4=false;color1='';color2='';color3='';color4='';
 buttonWidth=false;
 applyWidth=true;
 revenueDialog=false;
 monthDialog=false;
 categoryDialog=false;
  pressed = false;
  currentResizeIndex: number;
  startX: number;
  startWidth: number;
  isResizingRight: boolean;
  resizableMousemove: () => void;
  resizableMouseup: () => void;
  constructor(private httpService: HttpClient, private renderer: Renderer2,private dialog: MatDialog) { 
    this.filterSelectObj = [
      {
        name:'Category',
        columnProp:'Category',
        options:[]
      },{
        name:'Month',
        columnProp:'Month',
        options:[]
      },{
        name:'Revenue',
        columnProp:'Revenue',
        options:[]
      }
    ]
  }

  ngOnInit() {

    this.httpService.get('./assets/appda.json').subscribe(
      data => {
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      this.dataSource=new MatTableDataSource(this.arr);
      this.dataSource.sort = this.sort;
      //this.setDisplayedColumns();
      this.dataSource.filterPredicate = this.createFilter();
      this.getRemoteData();
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
 //   this.dataSource = new MatTableDataSource(this.arr);
  }
  openWidth(){
    this.buttonWidth=true;
  }
  onVal2(event:Event){
  this.w=+(<HTMLInputElement>event.target).value;
  }
  onApply(){
  this.applyWidth=true;
  }
  onCancel(){
 this.applyWidth=false;
  }
  openDialog() {
this.revenueDialog=true;
this.categoryDialog=false;
this.monthDialog=false;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      operators:['<','>','=','>=','<=','!='],
      value: this.value,
      operator:this.operator
    }
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    //this.dialog.open(CourseDialogComponent, dialogConfig);
    console.log(dialogConfig.data.operator);


dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
  console.log(dialogConfig.data.value);
  this.o=dialogConfig.data.operator;
  this.v=dialogConfig.data.value;
});
  
}

openDialog2(){
  this.categoryDialog=true;
  this.revenueDialog=false;
  this.monthDialog=false;
  const dialogConfig2 = new MatDialogConfig();

  dialogConfig2.disableClose = true;
  dialogConfig2.autoFocus = true;
  dialogConfig2.data={
    strings:["Equal","Not Equal","Begin","Not Begin","End","Not End","Contain","Not Contain"],
    label: this.label,
    string:this.string
  }
  const dialogRef2 = this.dialog.open(DialogLabelComponent, dialogConfig2);
  
dialogRef2.afterClosed().subscribe(result => {
  console.log('The dialog2 was closed');
  console.log(dialogConfig2.data.label+" "+dialogConfig2.data.string);
  this.s=dialogConfig2.data.string;
  this.l=dialogConfig2.data.label;
});
}

openDialog3(){
  this.monthDialog=true;
  this.revenueDialog=false;
  this.categoryDialog=false;
  const dialogConfig3 = new MatDialogConfig();

  dialogConfig3.disableClose = true;
  dialogConfig3.autoFocus = true;
  dialogConfig3.data={
    strings:["Equal","Not Equal","Begin","Not Begin","End","Not End","Contain","Not Contain"],
    label: this.label,
    string:this.string
  }
  const dialogRef3 = this.dialog.open(DialogMonthComponent, dialogConfig3);
  
dialogRef3.afterClosed().subscribe(result => {
  console.log('The dialog3 was closed');
  console.log(dialogConfig3.data.label+" "+dialogConfig3.data.string);
  this.s2=dialogConfig3.data.string;
  this.l2=dialogConfig3.data.label;
});
}

col1(){
  this.column1=true;
  this.color1='lightblue';
}

col2(){
  this.color2='lightblue';
}
col3(){
this.color3='lightblue';
}
col4(){
  this.color4='lightblue';
}

checkBegin(input:string,s:string){
  if(input.startsWith(s)){
   return true;
  }
  else{
    return false;
  }
}
checkNotBegin(input:string,s:string){
  if(!input.startsWith(s)){
    return true;
  }
  else{
    return false;
  }
}

checkEnd(input:string,s:string){
  if(input.endsWith(s)){
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
checkEqual(input:string,s:string){
  if(input.match(s)){
    return true;
  }
  else{
    return false;
  }
}
checkContain(input:string,s:string){
  if(input.search(s)){
    return true;

  }
  else{
    return false;
  }
  }


  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }
  getRemoteData(){
    
  this.filterSelectObj.filter((o) => {
    o.options = this.getFilterObject(this.dataSource.data, o.columnProp);
  });
  console.log(this.filterSelectObj);

}
// Called on Filter change
filterChange(filter, event) {
  //let filterValues = {}
  this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
  this.dataSource.filter = JSON.stringify(this.filterValues)
}

createFilter() {
  let filterFunction = function (data: any, filter: string): boolean {
    let searchTerms = JSON.parse(filter);
    let isFilterSet = false;
    for (const col in searchTerms) {
      if (searchTerms[col].toString() !== '') {
        isFilterSet = true;
      } else {
        delete searchTerms[col];
      }
    }

    console.log(searchTerms);

    let nameSearch = () => {
      let found = false;
      if (isFilterSet) {
        for (const col in searchTerms) {
          searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
            if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
              found = true
            }
          });
        }
        return found
      } else {
        return true;
      }
    }
    return nameSearch()
  }
  return filterFunction
}
resetFilters() {
  this.filterValues = {}
  this.filterSelectObj.forEach((value, key) => {
    value.modelValue = undefined;
  })
  this.dataSource.filter = "";

}
  //idk
/*
  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }
  setTableResize(tableWidth: number) {
    let totWidth = 0;
    this.columns.forEach(( column) => {
      totWidth += column.width;
    });
    const scale = (tableWidth - 5) / totWidth;
    this.columns.forEach(( column) => {
      column.width *= scale;
      this.setColumnWidth(column);
    });
  }

  setDisplayedColumns() {
    this.columns.forEach(( column, index) => {
      column.index = index;
      this.displayedColumns[index] = column.field;
    });
  }

  onResizeColumn(event: any, index: number) {
    this.checkResizing(event, index);
    this.currentResizeIndex = index;
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = event.target.clientWidth;
    event.preventDefault();
    this.mouseMove(index);
    console.log("in function");
  }

  private checkResizing(event, index) {
    const cellData = this.getCellData(index);
    if ( ( index === 0 ) || ( Math.abs(event.pageX - cellData.right) < cellData.width / 2 &&  index !== this.columns.length - 1 ) ) {
      this.isResizingRight = true;
    } else {
      this.isResizingRight = false;
    }
  }

  private getCellData(index: number) {
    const headerRow = this.matTableRef.nativeElement.children[0];
    const cell = headerRow.children[index];
    return cell.getBoundingClientRect();
  }

  mouseMove(index: number) {
    this.resizableMousemove = this.renderer.listen('document', 'mousemove', (event) => {
      if (this.pressed && event.buttons ) {
        const dx = (this.isResizingRight) ? (event.pageX - this.startX) : (-event.pageX + this.startX);
        const width = this.startWidth + dx;
        if ( this.currentResizeIndex === index && width > 50 ) {
          this.setColumnWidthChanges(index, width);
        }
      }
    });
    this.resizableMouseup = this.renderer.listen('document', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
        this.currentResizeIndex = -1;
        this.resizableMousemove();
        this.resizableMouseup();
      }
    });
  }

  setColumnWidthChanges(index: number, width: number) {
    const orgWidth = this.columns[index].width;
    const dx = width - orgWidth;
    if ( dx !== 0 ) {
      const j = ( this.isResizingRight ) ? index + 1 : index - 1;
      const newWidth = this.columns[j].width - dx;
      if ( newWidth > 50 ) {
          this.columns[index].width = width;
          this.setColumnWidth(this.columns[index]);
          this.columns[j].width = newWidth;
          this.setColumnWidth(this.columns[j]);
        }
    }
  }

  setColumnWidth(column: any) {
    const columnEls = Array.from( document.getElementsByClassName('mat-column-' + column.field) );
    columnEls.forEach(( el: HTMLDivElement ) => {
      el.style.width = column.width + 'px';
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }
*/

}
