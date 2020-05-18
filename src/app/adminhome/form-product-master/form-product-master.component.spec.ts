import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductMasterComponent } from './form-product-master.component';

describe('FormProductMasterComponent', () => {
  let component: FormProductMasterComponent;
  let fixture: ComponentFixture<FormProductMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProductMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
