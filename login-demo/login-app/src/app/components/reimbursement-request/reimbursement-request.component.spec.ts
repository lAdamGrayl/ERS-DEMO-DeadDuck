import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementRequestComponent } from './reimbursement-request.component';
// @ts-ignore
import {beforeEach} from 'jasmine';
// @ts-ignore
import {it} from 'jasmine';
// @ts-ignore
import {expect} from 'jasmine';
// @ts-ignore
import {describe} from 'jasmine';

describe('ReimbursementRequestComponent', () => {
  let component: ReimbursementRequestComponent;
  let fixture: ComponentFixture<ReimbursementRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbursementRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
