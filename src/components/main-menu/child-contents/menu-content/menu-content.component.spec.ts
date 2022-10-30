/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuContentComponent } from './menu-content.component';

describe('MenuContentComponent', () => {
  let component: MenuContentComponent;
  let fixture: ComponentFixture<MenuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
