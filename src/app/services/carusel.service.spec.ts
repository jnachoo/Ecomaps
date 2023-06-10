import { TestBed } from '@angular/core/testing';

import { CaruselService } from './carusel.service';

describe('CaruselService', () => {
  let service: CaruselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaruselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
