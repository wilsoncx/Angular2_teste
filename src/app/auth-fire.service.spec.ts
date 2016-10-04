/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthFireService } from './auth-fire.service';

describe('Service: AuthFire', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFireService]
    });
  });

  it('should ...', inject([AuthFireService], (service: AuthFireService) => {
    expect(service).toBeTruthy();
  }));
});
