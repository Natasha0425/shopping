import { Customer } from 'src/app/ViewModel/customers';
import { Component, OnInit } from '@angular/core';
import { ShopInquireService } from '../shop-inquire.service';
import { query } from '@angular/animations';
import { Product } from 'src/app/ViewModel/product';

@Component({
  selector: 'app-shop-dialog',
  templateUrl: './shop-dialog.component.html',
  styleUrls: ['./shop-dialog.component.scss']
})
export class ShopDialogComponent implements OnInit {
  public customer: Customer[] = [];
  public product: Product[] = [];
  public isSaveBtnActivabled: boolean = false;

  constructor(public dataService:ShopInquireService) {}

  public async ngOnInit() {
  }

  /**
   * 按下叉叉按鈕
   * 關閉對話框
   */
  public onClose(){
    this.dataService.isDialogVisibled = false;
  }

  /**
   * 按下查詢按鈕
   * 1.核對客戶資料是否正確
   * 2.尋找客戶訂單
   * 3.按下查詢對話框，顯示在介面上
   */
  public async onSearchClick(){
    const tName = this.dataService.tName;
    const tPhone = this.dataService.tNumber;
    const rules = new RegExp("09\\d{2}\\d{3}\\d{3}");

    if(!rules.test(tName[0])){
      this.customer = await this.dataService.getCustomers("",tName);
    }
    if(rules.test(tPhone)) {
      this.customer = await this.dataService.getCustomers(tPhone,"");
    }
    await this.dataService.getProducts()
    this.dataService.getCustomerProducts(this.customer[0].name);
    this.dataService.isDialogVisibled = false;
  }

}
