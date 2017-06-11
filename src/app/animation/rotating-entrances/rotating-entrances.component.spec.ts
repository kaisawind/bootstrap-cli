import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingEntrancesComponent } from './rotating-entrances.component';

describe('RotatingEntrancesComponent', () => {
  let component: RotatingEntrancesComponent;
  let fixture: ComponentFixture<RotatingEntrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingEntrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingEntrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
