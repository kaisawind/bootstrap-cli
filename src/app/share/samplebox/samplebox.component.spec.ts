import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleboxComponent } from './samplebox.component';

describe('SampleboxComponent', () => {
  let component: SampleboxComponent;
  let fixture: ComponentFixture<SampleboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
