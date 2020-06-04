import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMonthComponent } from './dialog-month.component';

describe('DialogMonthComponent', () => {
  let component: DialogMonthComponent;
  let fixture: ComponentFixture<DialogMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
