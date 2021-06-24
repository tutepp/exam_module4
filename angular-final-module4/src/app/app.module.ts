import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeUpdateComponent } from './awesome-update/awesome-update.component';
import { AwesomeDeleteComponent } from './awesome-delete/awesome-delete.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AwesomeUpdateComponent,
    AwesomeDeleteComponent,
    AwesomeListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
