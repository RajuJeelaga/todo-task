import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHerosComponent } from './display-heros.component';

describe('DisplayHerosComponent', () => {
  let component: DisplayHerosComponent;
  let fixture: ComponentFixture<DisplayHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
