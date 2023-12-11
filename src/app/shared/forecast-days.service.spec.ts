import { TestBed } from '@angular/core/testing';

import { ForecastDaysService } from './forecast-days.service';

describe('ForecastDaysService', () => {
  let service: ForecastDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
