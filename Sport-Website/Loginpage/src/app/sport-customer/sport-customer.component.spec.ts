import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCustomerComponent } from './sport-customer.component';

describe('SportCustomerComponent', () => {
  let component: SportCustomerComponent;
  let fixture: ComponentFixture<SportCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
