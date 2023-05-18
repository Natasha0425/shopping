import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInquireComponent } from './shop-inquire.component';

describe('ShopInquireComponent', () => {
  let component: ShopInquireComponent;
  let fixture: ComponentFixture<ShopInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
