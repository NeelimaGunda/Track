import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemnoComponent } from './itemno.component';

describe('ItemnoComponent', () => {
  let component: ItemnoComponent;
  let fixture: ComponentFixture<ItemnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
