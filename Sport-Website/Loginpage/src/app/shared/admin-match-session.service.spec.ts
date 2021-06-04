import { TestBed } from '@angular/core/testing';

import { AdminMatchSessionService } from './admin-match-session.service';

describe('AdminMatchSessionService', () => {
  let service: AdminMatchSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMatchSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
