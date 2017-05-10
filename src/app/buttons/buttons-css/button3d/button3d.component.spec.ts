import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Button3dComponent } from './button3d.component';

describe('Button3dComponent', () => {
  let component: Button3dComponent;
  let fixture: ComponentFixture<Button3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Button3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Button3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
