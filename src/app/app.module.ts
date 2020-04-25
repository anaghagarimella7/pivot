import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms'
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

const appRoutes:Routes=[
  { path : '', component:HomeComponent } ,
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    AlertModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
