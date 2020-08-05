import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquListComponent } from './equ-list.component';

describe('EquListComponent', () => {
  let component: EquListComponent;
  let fixture: ComponentFixture<EquListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
