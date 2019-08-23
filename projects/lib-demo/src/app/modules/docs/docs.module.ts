import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { OdinCardComponent } from './components/odin-card/odin-card.component';
import { DocsHomeComponent } from './components/docs-home/docs-home.component';
import {SharedModule} from '../shared/shared.module';
import { OverviewComponent } from './components/overview/overview.component';


@NgModule({
  declarations: [OdinCardComponent, DocsHomeComponent, OverviewComponent],
  imports: [
    CommonModule,
    DocsRoutingModule,
    SharedModule
  ]
})
export class DocsModule { }
