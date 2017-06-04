import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTextComponent } from './switch-text.component';

describe('SwitchTextComponent', () => {
  let component: SwitchTextComponent;
  let fixture: ComponentFixture<SwitchTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
