import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/ViewModel/product';
import { ShopInquireService } from '../shop-inquire.service';

@Component({
  selector: 'app-shop-table',
  templateUrl: './shop-table.component.html',
  styleUrls: ['./shop-table.component.scss']
})
export class ShopTableComponent implements OnInit {
  public cols!: any[];
  public product: Product[] = [];

  constructor(public dataService:ShopInquireService) { }

  public async ngOnInit() {
    this.product = await this.dataService.getProducts();
  }



}
