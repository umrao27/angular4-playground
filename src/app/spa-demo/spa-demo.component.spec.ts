import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaDemoComponent } from './spa-demo.component';

describe('SpaDemoComponent', () => {
  let component: SpaDemoComponent;
  let fixture: ComponentFixture<SpaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
