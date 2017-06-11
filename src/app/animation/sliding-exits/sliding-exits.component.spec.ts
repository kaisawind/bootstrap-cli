import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingExitsComponent } from './sliding-exits.component';

describe('SlidingExitsComponent', () => {
  let component: SlidingExitsComponent;
  let fixture: ComponentFixture<SlidingExitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingExitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingExitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
