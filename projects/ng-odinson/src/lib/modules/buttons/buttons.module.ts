import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GhostButtonDirective} from './directives/ghost/ghost-button.directive';
import {FlatButtonDirective} from './directives/flat/flat-button.directive';


@NgModule({
  declarations: [
    GhostButtonDirective,
    FlatButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GhostButtonDirective,
    FlatButtonDirective
  ]
})
export class ButtonsModule {
}
