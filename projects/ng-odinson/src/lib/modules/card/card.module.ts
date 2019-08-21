import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {CardBodyComponent} from './components/card-body/card-body.component';
import {CardHeaderComponent} from './components/card-header/card-header.component';
import {CardFooterComponent} from './components/card-footer/card-footer.component';


@NgModule({
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardFooterComponent
  ]
})
export class CardModule {
}
