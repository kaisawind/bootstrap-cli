import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingExitsComponent } from './bouncing-exits.component';

describe('BouncingExitsComponent', () => {
  let component: BouncingExitsComponent;
  let fixture: ComponentFixture<BouncingExitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncingExitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncingExitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
