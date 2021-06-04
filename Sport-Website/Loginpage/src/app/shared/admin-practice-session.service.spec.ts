import { TestBed } from '@angular/core/testing';

import { AdminPracticeSessionService } from './admin-practice-session.service';

describe('AdminPracticeSessionService', () => {
  let service: AdminPracticeSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPracticeSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
