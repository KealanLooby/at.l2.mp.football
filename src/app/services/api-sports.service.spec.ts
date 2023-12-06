import { TestBed } from '@angular/core/testing';

import { ApiSportsService } from './api-sports.service';

describe('ApiSportsService', () => {
  let service: ApiSportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
