import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericsubmoduleComponent } from './genericsubmodule.component';

describe('GenericsubmoduleComponent', () => {
  let component: GenericsubmoduleComponent;
  let fixture: ComponentFixture<GenericsubmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericsubmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericsubmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
