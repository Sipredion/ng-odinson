import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdinCardComponent } from './odin-card.component';

describe('OdinCardComponent', () => {
  let component: OdinCardComponent;
  let fixture: ComponentFixture<OdinCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdinCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
