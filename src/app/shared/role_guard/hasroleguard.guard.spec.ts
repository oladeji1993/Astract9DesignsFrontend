import { TestBed } from '@angular/core/testing';

import { HasroleguardGuard } from './hasroleguard.guard';

describe('HasroleguardGuard', () => {
  let guard: HasroleguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasroleguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
