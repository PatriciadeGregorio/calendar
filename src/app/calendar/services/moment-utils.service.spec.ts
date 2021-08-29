import { TestBed } from '@angular/core/testing';

import { MomentUtilsService } from './moment-utils.service';

describe('MomentUtilsService', () => {
  let service: MomentUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
