import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GhostButtonDirective} from './directives/ghost/ghost-button.directive';


@NgModule({
  declarations: [
    GhostButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GhostButtonDirective
  ]
})
export class ButtonsModule {
}
