import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchColorsComponent } from './switch-colors.component';

describe('SwitchColorsComponent', () => {
  let component: SwitchColorsComponent;
  let fixture: ComponentFixture<SwitchColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
