import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadingExitsComponent } from './fading-exits.component';

describe('FadingExitsComponent', () => {
  let component: FadingExitsComponent;
  let fixture: ComponentFixture<FadingExitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadingExitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadingExitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
