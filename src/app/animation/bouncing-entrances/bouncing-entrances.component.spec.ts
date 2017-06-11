import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingEntrancesComponent } from './bouncing-entrances.component';

describe('BouncingEntrancesComponent', () => {
  let component: BouncingEntrancesComponent;
  let fixture: ComponentFixture<BouncingEntrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncingEntrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncingEntrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
