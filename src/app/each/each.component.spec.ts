/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EachComponent } from './each.component';

describe('EachComponent', () => {
  let component: EachComponent;
  let fixture: ComponentFixture<EachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
