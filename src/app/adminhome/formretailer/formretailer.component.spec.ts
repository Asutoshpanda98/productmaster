import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormretailerComponent } from './formretailer.component';

describe('FormretailerComponent', () => {
  let component: FormretailerComponent;
  let fixture: ComponentFixture<FormretailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormretailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
