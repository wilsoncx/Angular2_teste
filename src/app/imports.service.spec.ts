/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImportsService } from './imports.service';

describe('Service: Imports', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportsService]
    });
  });

  it('should ...', inject([ImportsService], (service: ImportsService) => {
    expect(service).toBeTruthy();
  }));
});
