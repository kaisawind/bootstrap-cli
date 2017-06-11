import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingEntrancesComponent } from './sliding-entrances.component';

describe('SlidingEntrancesComponent', () => {
  let component: SlidingEntrancesComponent;
  let fixture: ComponentFixture<SlidingEntrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingEntrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingEntrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
