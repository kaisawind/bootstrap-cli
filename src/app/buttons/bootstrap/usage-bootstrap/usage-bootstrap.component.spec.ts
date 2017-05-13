import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageBootstrapComponent } from './usage-bootstrap.component';

describe('UsageBootstrapComponent', () => {
  let component: UsageBootstrapComponent;
  let fixture: ComponentFixture<UsageBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
