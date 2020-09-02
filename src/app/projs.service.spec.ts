import { TestBed } from '@angular/core/testing';

import { ProjsService } from './projs.service';

describe('ProjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjsService = TestBed.get(ProjsService);
    expect(service).toBeTruthy();
  });
});
