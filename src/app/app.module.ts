import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';

import {DragDropModule} from '@angular/cdk/drag-drop';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import { ButtonComponent } from './button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {format} from './button/format.pipe';
import {Routes,RouterModule} from '@angular/router';
import { ColumnComponent } from './column/column.component';
import { SeperatorPipe } from './seperator.pipe';
import {AlertModule } from './_alert';
import {HttpClientModule} from '@angular/common/http';
import { DbComponent } from './db/db.component';
import { ChartsComponent } from './charts/charts.component';
import { MyBarChartComponent } from './charts/my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './charts/my-pie-chart/my-pie-chart.component';
import {ChartsModule} from 'ng2-charts';
import { MyDoughnutChartComponent } from './charts/my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './charts/my-radar-chart/my-radar-chart.component';
import { SavePdfComponent } from './charts/save-pdf/save-pdf.component';
import { HomeComponent } from './home/home.component';
import { InterfaceComponent } from './interface/interface.component';
import {MatSortModule} from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DialogLabelComponent } from './dialog-label/dialog-label.component'; 
const appRoutes:Routes=[
  { path : '', component:HomeComponent } ,
  {path:'home',component:InterfaceComponent},
  {path:'format',component:ButtonComponent},
  {path:'charts',component:ChartsComponent},
  {path:'charts/bar-chart',component:MyBarChartComponent},
  {path:'charts/pie-chart',component:MyPieChartComponent},
  {path:'charts/radar-chart',component:MyRadarChartComponent},
  {path:'charts/doughnut-chart',component:MyDoughnutChartComponent},
  {path:'charts/save-pdf',component: SavePdfComponent},
  { path: 'database', component: DbComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    format,
    ColumnComponent,
    SeperatorPipe,
    DbComponent,
    ChartsComponent,
    MyBarChartComponent,
    MyPieChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    SavePdfComponent,
    HomeComponent,
    InterfaceComponent,
    CourseDialogComponent,
    DialogLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
MatSortModule,
A11yModule,
CdkTableModule,
CdkTreeModule,
DragDropModule,
MatSelectModule,
MatInputModule,
MatButtonModule,
    AlertModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [CourseDialogComponent,DialogLabelComponent],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
