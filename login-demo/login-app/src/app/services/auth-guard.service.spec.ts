import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
// @ts-ignore
import {describe} from 'jasmine';
// @ts-ignore
import {beforeEach} from 'jasmine';
// @ts-ignore
import {it} from 'jasmine';
// @ts-ignore
import {expect} from 'jasmine';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
