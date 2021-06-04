import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageCoachComponent } from './login-page-coach.component';

describe('LoginPageCoachComponent', () => {
  let component: LoginPageCoachComponent;
  let fixture: ComponentFixture<LoginPageCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
