import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAnimationComponent } from './switch-animation.component';

describe('SwitchAnimationComponent', () => {
  let component: SwitchAnimationComponent;
  let fixture: ComponentFixture<SwitchAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
