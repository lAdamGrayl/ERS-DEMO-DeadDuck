import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
// @ts-ignore
import {beforeEach} from 'jasmine';
// @ts-ignore
import {describe} from 'jasmine';
// @ts-ignore
import {expect} from 'jasmine';
// @ts-ignore
import {it} from 'jasmine';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
