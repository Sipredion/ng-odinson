import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingMenuComponent } from './components/floating-menu/floating-menu.component';



@NgModule({
  declarations: [FloatingMenuComponent],
  exports: [
    FloatingMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FloatingMenuModule { }
