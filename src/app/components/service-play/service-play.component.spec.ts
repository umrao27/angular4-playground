import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePlayComponent } from './service-play.component';

describe('ServicePlayComponent', () => {
  let component: ServicePlayComponent;
  let fixture: ComponentFixture<ServicePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
