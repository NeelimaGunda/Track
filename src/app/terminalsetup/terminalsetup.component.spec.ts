import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalsetupComponent } from './terminalsetup.component';

describe('TerminalsetupComponent', () => {
  let component: TerminalsetupComponent;
  let fixture: ComponentFixture<TerminalsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalsetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
