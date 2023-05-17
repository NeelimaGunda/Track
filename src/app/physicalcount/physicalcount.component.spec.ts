import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalcountComponent } from './physicalcount.component';

describe('PhysicalcountComponent', () => {
  let component: PhysicalcountComponent;
  let fixture: ComponentFixture<PhysicalcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
