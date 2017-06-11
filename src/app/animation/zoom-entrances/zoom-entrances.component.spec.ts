import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomEntrancesComponent } from './zoom-entrances.component';

describe('ZoomEntrancesComponent', () => {
  let component: ZoomEntrancesComponent;
  let fixture: ComponentFixture<ZoomEntrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomEntrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomEntrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
