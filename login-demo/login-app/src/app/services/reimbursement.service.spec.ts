import { TestBed, inject } from '@angular/core/testing';

import { ReimbursementService } from './reimbursement.service';
// @ts-ignore
import {describe} from 'jasmine';
// @ts-ignore
import {beforeEach} from 'jasmine';
// @ts-ignore
import {it} from 'jasmine';
// @ts-ignore
import {expect} from 'jasmine';

describe('ReimbursementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReimbursementService]
    });
  });

  it('should be created', inject([ReimbursementService], (service: ReimbursementService) => {
    expect(service).toBeTruthy();
  }));
});
