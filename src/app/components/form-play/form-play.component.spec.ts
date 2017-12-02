import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlayComponent } from './form-play.component';

describe('FormPlayComponent', () => {
  let component: FormPlayComponent;
  let fixture: ComponentFixture<FormPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
