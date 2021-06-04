import { TestBed } from '@angular/core/testing';

import { CoachrankingService } from './coachranking.service';

describe('CoachrankingService', () => {
  let service: CoachrankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachrankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
