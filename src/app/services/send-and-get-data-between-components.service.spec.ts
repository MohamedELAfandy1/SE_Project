import { TestBed } from '@angular/core/testing';

import { SendAndGetDataBetweenComponentsService } from './send-and-get-data-between-components.service';

describe('SendAndGetDataBetweenComponentsService', () => {
  let service: SendAndGetDataBetweenComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendAndGetDataBetweenComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
