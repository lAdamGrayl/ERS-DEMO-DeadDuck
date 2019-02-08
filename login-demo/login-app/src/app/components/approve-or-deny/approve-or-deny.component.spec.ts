import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveOrDenyComponent } from './approve-or-deny.component';
// @ts-ignore
import {beforeEach} from 'jasmine';
// @ts-ignore
import {it} from 'jasmine';
// @ts-ignore
import {expect} from 'jasmine';
// @ts-ignore
import {describe} from 'jasmine';

describe('ApproveOrDenyComponent', () => {
  let component: ApproveOrDenyComponent;
  let fixture: ComponentFixture<ApproveOrDenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveOrDenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveOrDenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
