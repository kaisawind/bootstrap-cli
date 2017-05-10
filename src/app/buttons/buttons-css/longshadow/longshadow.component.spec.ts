import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongshadowComponent } from './longshadow.component';

describe('LongshadowComponent', () => {
  let component: LongshadowComponent;
  let fixture: ComponentFixture<LongshadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongshadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongshadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
