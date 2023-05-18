import { Component, OnInit } from '@angular/core';
import { ShopInquireService } from './shop-inquire.service';

@Component({
  selector: 'app-shop-inquire',
  templateUrl: './shop-inquire.component.html',
  styleUrls: ['./shop-inquire.component.scss']
})
export class ShopInquireComponent implements OnInit {
  public state: string = '';

  constructor(public dataService:ShopInquireService) { }

  ngOnInit(): void {
  }

  /**
   * 按下工具列上的查詢按鈕
   * 顯示輸入客戶資料的對話框
   */
  public onSearchClick(){
    this.dataService.isDialogVisibled = true;
    this.state = '全部'
  }

  /**
   * 按下工具列上的已到達按鈕
   * 顯示已到達資料
   */
  public onArrivalClick(){
    this.dataService.getArrivalProducts();
    this.state = '已到貨'
  }

  /**
   * 按下工具列上的已到達按鈕
   * 顯示未到達資料
   */
  public onUnArrivalClick(){
    this.dataService.getUnArrivalProducts();
    this.state = '未到貨'
  }

  /**
   * 按下工具列上的全部按鈕
   * 顯示全部資料
   */
  public async onArrivalTotal(){
    this.dataService.getTotalProducts();
    this.state = '全部'
  }

}
