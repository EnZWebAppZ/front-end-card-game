import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokerComponent } from './poker.component';
import { WindowRef } from '../services/window-ref.service';
import { StoreModule } from '@ngrx/store';
import { StoreState } from '../state/models/store-state';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
  imports: [BrowserModule, FormsModule,
   StoreModule.forRoot(new StoreState()),
   MDBBootstrapModule.forRoot()],
  declarations: [AppComponent, PokerComponent],
  bootstrap: [AppComponent],
  providers : [ WindowRef]
})
export class AppModule { }
