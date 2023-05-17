import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BininquiryComponent } from './bininquiry.component';

describe('BininquiryComponent', () => {
  let component: BininquiryComponent;
  let fixture: ComponentFixture<BininquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BininquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BininquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
