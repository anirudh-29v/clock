import { TestBed } from '@angular/core/testing';

import { TServiceService } from './t-service.service';

describe('TServiceService', () => {
  let service: TServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
