import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDisabledComponent } from './switch-disabled.component';

describe('SwitchDisabledComponent', () => {
  let component: SwitchDisabledComponent;
  let fixture: ComponentFixture<SwitchDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
