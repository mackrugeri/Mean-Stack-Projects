import { TestBed } from '@angular/core/testing';

import { PlayersessionService } from './playersession.service';

describe('PlayersessionService', () => {
  let service: PlayersessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
