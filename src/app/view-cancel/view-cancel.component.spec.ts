import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancelComponent } from './view-cancel.component';

describe('ViewCancelComponent', () => {
  let component: ViewCancelComponent;
  let fixture: ComponentFixture<ViewCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
