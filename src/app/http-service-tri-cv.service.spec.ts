import { TestBed } from '@angular/core/testing';

import { HttpServiceTriCVService } from './http-service-tri-cv.service';

describe('HttpServiceTriCVService', () => {
  let service: HttpServiceTriCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceTriCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
