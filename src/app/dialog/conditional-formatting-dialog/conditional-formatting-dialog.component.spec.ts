import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFormattingDialogComponent } from './conditional-formatting-dialog.component';

describe('ConditionalFormattingDialogComponent', () => {
  let component: ConditionalFormattingDialogComponent;
  let fixture: ComponentFixture<ConditionalFormattingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalFormattingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalFormattingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
