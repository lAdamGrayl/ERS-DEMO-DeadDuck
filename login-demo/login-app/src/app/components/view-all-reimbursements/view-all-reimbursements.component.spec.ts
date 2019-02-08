import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllReimbursementsComponent } from './view-all-reimbursements.component';
// @ts-ignore
import {expect} from 'jasmine';
// @ts-ignore
import {it} from 'jasmine';
// @ts-ignore
import {describe} from 'jasmine';
// @ts-ignore
import {beforeEach} from 'jasmine';

describe('ViewAllReimbursementsComponent', () => {
  let component: ViewAllReimbursementsComponent;
  let fixture: ComponentFixture<ViewAllReimbursementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllReimbursementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
