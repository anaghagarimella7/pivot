import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquChartComponent } from './equ-chart.component';

describe('EquChartComponent', () => {
  let component: EquChartComponent;
  let fixture: ComponentFixture<EquChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
