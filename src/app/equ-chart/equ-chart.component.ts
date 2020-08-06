import { FilterDialogComponent } from './../dialog/filter-dialog/filter-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-equ-chart',
  templateUrl: './equ-chart.component.html',
  styleUrls: ['./equ-chart.component.scss']
})
export class EquChartComponent implements OnInit, OnChanges {
  @Input() columns;
  @Input() items;
   @Input('chart') charttype;
  chartlabel = [];
  chartItem = [];
  xAxis;
  yAxis;
  selectedVariable: 0;
  change=false;
  xy = new Map();
  
  barChartLegend = true;
  barChartPlugins = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChart: {
    data: ChartDataSets[],
    label: Label[],
    type: ChartType
  } = {
      data: [{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }],
      label: ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'],
      type: 'bar'
    };
    doughnutChartLegend = true;
  doughnutChartPlugins = [];
  doughnutChartOptions: ChartOptions = {
    responsive: true,
  };
  doughnutChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
  doughnutChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  doughnutChartType: ChartType = 'bar';
  doughnutChart: {
    data: ChartDataSets[],
    label: Label[],
    type: ChartType
  } = {
      data: [{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }],
      label: ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'],
      type: 'bar'
    };
    pieChartLegend = true;
  pieChartPlugins = [];
  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
  pieChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  pieChartType: ChartType = 'pie';
  pieChart: {
    data: ChartDataSets[],
    label: Label[],
    type: ChartType
  } = {
      data: [{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }],
      label: ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'],
      type: 'pie'
    };
    lineChartLegend = true;
  lineChartPlugins = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
  lineChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  lineChartType: ChartType = 'pie';
  lineChart: {
    data: ChartDataSets[],
    label: Label[],
    type: ChartType
  } = {
      data: [{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }],
      label: ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'],
      type: 'pie'
    };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog:MatDialog) {
    iconRegistry.addSvgIcon(
      'filter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filter_alt-24px.svg'));
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.columns != undefined && this.items != undefined) {
      this.initializeAxis();
      this.initializseChartView();
    }

  }
  initializeAxis()
  {
    this.setXAxis();
    this.setYAxis();
  }
  initializseChartView()
  {
    this.initializeLabelAndItem();
    this.setCharts();
  }

  initializeLabelAndItem() {
    this.xy=new Map();
    for (let i = 0; i < this.items.length; i++) {
      let fcheck = true;
      for (let j = 0; j < this.columns.length; j++) {
        const filterStatus = this.columns[j]['filter'].status;
        if (filterStatus) {
          const filteroption = this.columns[j]['filter']['option'];
          const filtervalue = this.columns[j]['filter']['value'];
          fcheck = this.filterCheck(filteroption, filtervalue, this.items[i][this.columns[j].name]);
          if (fcheck == false) {
            break;
          }
        }
      }
      if (fcheck) {
        let key = this.items[i][this.xAxis];
        let val = this.items[i][this.yAxis];
        if (this.xy.has(key)) {
          const value = this.xy.get(key);
          this.xy.set(key, value + val);
        } else {
          this.xy.set(key, val);
        }
      }
    }
    this.chartlabel = Array.from(this.xy.keys());
    this.chartItem = Array.from(this.xy.values());
    console.log(this.chartItem);
    console.log(this.chartlabel);
  }

  setXAxis() {
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].datatype == 'string') {
        this.xAxis = this.columns[i].name;
        break;
      }
    }
  }

  setYAxis() {
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].datatype == 'number') {
        this.yAxis = this.columns[i].name;
        break;
      }
    }
  }

  setAxis(event,axes)
  {
    if(axes=='x')
    {
      this.xAxis=event.target.value;
    }else{
      this.yAxis=event.target.value;
    }
    this.initializseChartView();
  }

  setCharts() {
    switch (this.charttype) {
      case 'Bar':
        this.createBarChart();
        break;
      case 'Pie':
        this.createPieChart();
        break;
      case 'Doughnut':
        this.createDoughnutChart();
        break;
      case 'Line':
        this.createLineChart();
        break;
      
    }
  }
  createBarChart() {
    this.barChart.data = [{ data: this.chartItem, label: 'Sum of ' + this.yAxis }];
    this.barChart.label = this.chartlabel;
    this.barChart.type = this.charttype.toLowerCase();
  }
  createPieChart() {
    this.pieChart.data = [{ data: this.chartItem, label: 'Sum of ' + this.yAxis }];
    this.pieChart.label = this.chartlabel;
    this.pieChart.type = this.charttype.toLowerCase();
  }
  createDoughnutChart() {
    this.doughnutChart.data = [{ data: this.chartItem, label: 'Sum of ' + this.yAxis }];
    this.doughnutChart.label = this.chartlabel;
    this.doughnutChart.type = this.charttype.toLowerCase();
  }
  createLineChart() {
    this.lineChart.data = [{ data: this.chartItem, label: 'Sum of ' + this.yAxis }];
    this.lineChart.label = this.chartlabel;
    this.lineChart.type = this.charttype.toLowerCase();
  }
  filterCheck(option, value, item): boolean {
    if(typeof(item)=='string'){
      item=item.toLowerCase();
      value=value.toLowerCase();
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
      case 'Begin':
        if (item.startsWith(value)) {
          return true;
        }
        break;
      case 'Not Begin':
        if (!item.startsWith(value)) {
          return true;
        }
        break;
    }
    return false;
  }

  
  filterItems(col) {

    console.log(col);
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '50%',
      height: '50%',
      data: { columns: this.columns, index: col },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(this.columns);
      this.initializseChartView();
    })
    
  }
  onSelectionChange(opened: boolean) {
    if (!opened && this.selectedVariable) {
      if(this.selectedVariable==null){
        this.selectedVariable=0;
      }
      this.filterItems(this.selectedVariable-1);
   }
    

  }
}
