import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOdinsonComponent } from './ng-odinson.component';

describe('NgOdinsonComponent', () => {
  let component: NgOdinsonComponent;
  let fixture: ComponentFixture<NgOdinsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOdinsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOdinsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
