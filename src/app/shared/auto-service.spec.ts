import { TestBed } from '@angular/core/testing';

import { AutosService } from './autos.service';

describe('AutoServiceService', () => {
  let service: AutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
