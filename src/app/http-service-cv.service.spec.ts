import { TestBed } from '@angular/core/testing';

import { HttpServiceCVService } from './http-service-cv.service';

describe('HttpServiceCVService', () => {
  let service: HttpServiceCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
