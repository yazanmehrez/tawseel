import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCustomerComponent } from './our-customer.component';

describe('OurCustomerComponent', () => {
  let component: OurCustomerComponent;
  let fixture: ComponentFixture<OurCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
