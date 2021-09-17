import { TestBed } from '@angular/core/testing';

import { MapDashService } from './map-dash.service';

describe('MapDashService', () => {
  let service: MapDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
