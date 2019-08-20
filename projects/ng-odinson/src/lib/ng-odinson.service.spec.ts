import { TestBed } from '@angular/core/testing';

import { NgOdinsonService } from './ng-odinson.service';

describe('NgOdinsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgOdinsonService = TestBed.get(NgOdinsonService);
    expect(service).toBeTruthy();
  });
});
