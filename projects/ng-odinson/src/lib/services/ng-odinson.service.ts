import {Inject, Injectable, Optional} from '@angular/core';
import {ApplicationConfig} from '../models/application-config.model';

@Injectable({
  providedIn: 'root'
})
export class NgOdinsonService {

  set applicationConfig(value: ApplicationConfig) {
    this._applicationConfig = value;
  }

  get applicationConfig(): ApplicationConfig {
    return this._applicationConfig;
  }

  _applicationConfig: ApplicationConfig;

  constructor(@Inject('config') config: any) {
    this.applicationConfig = config;
  }
}
