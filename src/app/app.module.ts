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

const appRoutes:Routes=[
  { path : 'add', component:ColumnComponent } 
]
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    format,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
