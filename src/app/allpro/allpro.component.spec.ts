/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllproComponent } from './allpro.component';

describe('AllproComponent', () => {
  let component: AllproComponent;
  let fixture: ComponentFixture<AllproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
