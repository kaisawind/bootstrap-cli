import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlippersComponent } from './flippers.component';

describe('FlippersComponent', () => {
  let component: FlippersComponent;
  let fixture: ComponentFixture<FlippersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlippersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
