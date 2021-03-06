import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSizeComponent } from './switch-size.component';

describe('SwitchSizeComponent', () => {
  let component: SwitchSizeComponent;
  let fixture: ComponentFixture<SwitchSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
