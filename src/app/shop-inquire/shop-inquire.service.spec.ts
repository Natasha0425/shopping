import { TestBed } from '@angular/core/testing';

import { ShopInquireService } from './shop-inquire.service';

describe('ShopInquireService', () => {
  let service: ShopInquireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopInquireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
