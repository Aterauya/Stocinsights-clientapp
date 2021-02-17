import { TestBed } from '@angular/core/testing';

import { StockHttpService } from './stock-http.service';

describe('StockHttpService', () => {
  let service: StockHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
