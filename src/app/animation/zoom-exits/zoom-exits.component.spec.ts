import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomExitsComponent } from './zoom-exits.component';

describe('ZoomExitsComponent', () => {
  let component: ZoomExitsComponent;
  let fixture: ComponentFixture<ZoomExitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomExitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomExitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
