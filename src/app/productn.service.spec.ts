import { TestBed } from '@angular/core/testing';

import { ProductnService } from './productn.service';

describe('ProductnService', () => {
  let service: ProductnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
