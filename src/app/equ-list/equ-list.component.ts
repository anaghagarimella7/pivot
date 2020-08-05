import { ConditionalFormattingDialogComponent } from './../dialog/conditional-formatting-dialog/conditional-formatting-dialog.component';
import { FilterDialogComponent } from './../dialog/filter-dialog/filter-dialog.component';
import { FieldDialogComponent } from './../dialog/field-dialog/field-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-equ-list',
  templateUrl: './equ-list.component.html',
  styleUrls: ['./equ-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EquListComponent implements OnInit {
  items;elem;
  columns;
  searchString = "";
  conditionalformat = [];
  tabularlayout = false;
  chartsType = ['Bar', 'Pie'];
  chart = 'Bar';
  @ViewChild(CdkVirtualScrollViewport, { static: false }) public viewPort: CdkVirtualScrollViewport;

  public get inverseTranslation(): string {
    if (!this.viewPort || !this.viewPort["_renderedContentOffset"]) {
      return "-0px";
    }
    let offset = this.viewPort["_renderedContentOffset"];
    return `-${offset}px`;
  }
  constructor(private httpService: HttpClient, public dialog: MatDialog,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'arrow-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_drop_up-24px.svg'));
    iconRegistry.addSvgIcon(
      'arrow-down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_drop_down-24px.svg'));
    iconRegistry.addSvgIcon(
      'filter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filter_alt-24px.svg'));
  }


  ngOnInit() {
    this.items = this.httpService.get('./assets/assetData.json').subscribe(data => {
      this.items = data;
      this.columns = Object.keys(data[0]).map(data => {
        return {
          name: data, asc: 0, checked: true, filter: {
            status: false,
            option: '',
            value: ''
          },
          datatype: this.getType(this.items[0][data])
        };
      });
      console.log(this.items);

    });
    this.elem = document.documentElement;

  }
  openFullScreen() {
    //this.t=false;
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

  getType(val) {
    if (typeof (val) == 'number') {
      return typeof (val);
    } else {
      if (val.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) {
        return 'date';
      } else {
        return typeof (val);
      }
    }
  }

  filterItems(col) {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '50%',
      height: '50%',
      data: { columns: this.columns, index: col },
      disableClose: true
    });

  }

  openConditionalFormattingDialog() {
    const dialogRef = this.dialog.open(ConditionalFormattingDialogComponent, {
      width: '70%',
      data: { columns: this.columns, format: this.conditionalformat },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.conditionalformat = [...result];
      }
    });
  }
  getStyle(name, value) {
   // console.log(this.conditionalformat);
    if (this.conditionalformat.length == 0) {
      return {
        backgroundColor: 'white'
      }
    } else {
      let styleProperty = {
        backgroundColor: 'white',
        fontFamily: 'Arial',
        color:'black'
      };
      this.conditionalformat.forEach(data => {
        if (data.column == name) {
          let check = this.styleCheck(data.operator, data.value, value)
          if (check) {
            styleProperty.backgroundColor = data.color;
            styleProperty.fontFamily = data.font;
            styleProperty.color = data.tcolor;

          }
        }
      })
      return styleProperty;
    }
  }
  styleCheck(option, value, item): boolean {
    if (option == 'Empty') {
      if (item == null || item == undefined || item == '') {
        return false;
      }
    }
    if (item == null || item == undefined) {
      return false;
    }
    switch (option) {
      case 'Equal':
        if (value == item) {
          return true
        }
        break;
      case 'Not equal':
        if (value != item) {
          return true;
        }
        break;
      case 'Less':
        if (item < value) {
          return true;
        }
        break;
      case 'Greater':
        if (item > value) {
          return true;
        }
        break;
      case 'Less or Equal':
        if (item <= value) {
          return true;
        }
        break;
      case 'Greater or equal':
        if (item >= value) {
          return true;
        }
        break;
    }
    return false;
  }

  changeOrder(col) {
    console.log(col);
    let colname = this.columns[col].name;
    console.log(colname);
    let newitem = [...this.items];
    console.log(newitem);
    if (this.columns[col].asc == 0) {
      this.items = newitem.sort((a, b) => {
        return (a[colname] > b[colname]) ? 1 : (b[colname] > a[colname]) ? -1 : 0;
      });
      this.columns[col].asc = 1;
    } else {
      this.items = newitem.sort((a, b) => {
        return (a[colname] > b[colname]) ? -1 : (b[colname] > a[colname]) ? 1 : 0;
      });
      this.columns[col].asc = 0;
    }
  }

  openFieldDialog() {
    const dialogRef = this.dialog.open(FieldDialogComponent, {
      width: '50%',
      height: '70%',
      data: { columns: this.columns, items: this.items },
      disableClose: true
    });
  }
  changeViewMode(chart) {
    if (chart) {
      this.tabularlayout = false;
    } else {
      this.tabularlayout = true;
      chart = chart;
    }
  }
}

