import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingExitsComponent } from './rotating-exits.component';

describe('RotatingExitsComponent', () => {
  let component: RotatingExitsComponent;
  let fixture: ComponentFixture<RotatingExitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingExitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingExitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
