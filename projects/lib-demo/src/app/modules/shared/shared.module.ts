import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgOdinsonModule} from '../../../../../ng-odinson/src/lib/ng-odinson.module';
import {ApplicationConfig} from '../../../../../ng-odinson/src/lib/models/application-config.model';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';

const appConfig: ApplicationConfig = {
  theme: {
    primary: 'rgb(0, 106, 255)',
    accent: 'rgb(255, 68, 0)',
    danger: 'rgb(158, 21, 0)'
  }
};

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NgOdinsonModule.forRoot(appConfig),
    RouterModule
  ],
  exports: [
    NgOdinsonModule,
    NavigationComponent
  ]
})
export class SharedModule {
}
