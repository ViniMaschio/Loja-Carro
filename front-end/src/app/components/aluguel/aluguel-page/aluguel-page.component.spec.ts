/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AluguelPageComponent } from './aluguel-page.component';

describe('AluguelPageComponent', () => {
  let component: AluguelPageComponent;
  let fixture: ComponentFixture<AluguelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluguelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
