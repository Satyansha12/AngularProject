import { TestBed } from '@angular/core/testing';

import { UsernService } from './usern.service';

describe('UsernService', () => {
  let service: UsernService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
