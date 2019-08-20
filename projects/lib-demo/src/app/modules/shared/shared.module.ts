import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgOdinsonModule} from '../../../../../ng-odinson/src/lib/ng-odinson.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgOdinsonModule
  ],
  exports: [
    NgOdinsonModule
  ]
})
export class SharedModule { }
