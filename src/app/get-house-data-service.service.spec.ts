import { TestBed } from '@angular/core/testing';

import { GetHouseDataServiceService } from './get-house-data-service.service';

describe('GetHouseDataServiceService', () => {
  let service: GetHouseDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHouseDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
