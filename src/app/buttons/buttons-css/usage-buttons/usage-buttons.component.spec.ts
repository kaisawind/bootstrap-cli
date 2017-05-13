import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageButtonsComponent } from './usage-buttons.component';

describe('UsageButtonsComponent', () => {
  let component: UsageButtonsComponent;
  let fixture: ComponentFixture<UsageButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
