import { TestBed } from '@angular/core/testing';

import { AdminaddService } from './adminadd.service';

describe('AdminaddService', () => {
  let service: AdminaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
