import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerPage } from './date-picker.page';

describe('DatePickerPage', () => {
  let component: DatePickerPage;
  let fixture: ComponentFixture<DatePickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
