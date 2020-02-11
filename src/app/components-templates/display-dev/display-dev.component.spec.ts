import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDevComponent } from './display-dev.component';

describe('DisplayDevComponent', () => {
  let component: DisplayDevComponent;
  let fixture: ComponentFixture<DisplayDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
