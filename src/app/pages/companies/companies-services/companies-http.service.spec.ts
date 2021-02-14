import { TestBed } from '@angular/core/testing';

import { CompaniesHttpService } from './companies-http.service';

describe('CompaniesHttpService', () => {
  let service: CompaniesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
