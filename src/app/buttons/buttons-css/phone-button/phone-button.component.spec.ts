import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneButtonComponent } from './phone-button.component';

describe('PhoneButtonComponent', () => {
  let component: PhoneButtonComponent;
  let fixture: ComponentFixture<PhoneButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
