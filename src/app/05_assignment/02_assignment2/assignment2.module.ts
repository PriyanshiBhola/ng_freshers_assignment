import { NgModule } from '@angular/core';
import { Assignment2Component } from './containers/assignment2.component';

import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';


@NgModule({
  imports :[
    BrowserModule,CommonModule
  ],
  declarations: [
    Assignment2Component
  ],
  exports: [
    Assignment2Component
  ]
})
export class Assignment2Module {

}
