import { TestBed } from '@angular/core/testing';

import { GlossyService } from './glossy.service';

describe('GlossyService', () => {
  let service: GlossyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlossyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
