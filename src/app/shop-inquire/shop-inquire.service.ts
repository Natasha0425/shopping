import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../ViewModel/product';
import { Customer } from '../ViewModel/customers';

@Injectable({
  providedIn: 'root'
})
export class ShopInquireService {
  public isDialogVisibled: boolean = false;
  public isSaveBtnActived: boolean = false;
  public customer: Customer[] = [];
  public product: Product[] = [];
  public tName!: string;
  public tNumber!: string;
  public totalProduct: number = 0;
  public tempProduct: any;
  public state: string = '';

  constructor(private http:HttpClient) { }

  /**
   * 取得表格內容
   * @returns 訂購商品
   */
  public async getProducts():Promise<Product[]>{
    const path = "/assets/mock/product.json";
    let products: any;
    products = await this.http.get<Product[]>(path).toPromise();
    this.product = products;
    this.onTotal();
    return products;
  }

  /**
   * 取得客戶資料
   * @returns 客戶資料
   */
  public async getCustomers(keyword: string, keyword1: string):Promise<Customer[]>{
    const path = "/assets/mock/customers.json";
    let customers: any;
    customers = await this.http.get<Customer[]>(path).toPromise();

    if(keyword!=""){
      customers = customers.filter((e: any) => {
        return e.phone === keyword
      })
    }
    if(keyword1!=""){
      customers = customers.filter((e: any) => {
        return e.customer === keyword1
      })
    }
    return customers;
  }

  /**
   * 取得某顧客表格內容
   * @returns 訂購商品
   */
  public getCustomerProducts(name: string){
    this.tempProduct = this.product;
    this.tempProduct = this.tempProduct.filter((x: any) => {
      return x.customer === name;
    });
    this.product = this.tempProduct;
    this.onTotal();
  }

  /**
   * 取得已到達資料
   * @returns 客戶已到達資料
   */
  public getArrivalProducts(){
    let tempArrivalProduct;
    if(this.tempProduct != null){
      tempArrivalProduct = this.tempProduct.filter((x: any) => {
        return x.state === "已到貨";
      });
    }else{
      this.tempProduct = this.product;
      tempArrivalProduct = this.tempProduct.filter((x: any) => {
        return x.state === "已到貨";
      });
    }
    this.product = tempArrivalProduct;
    this.onTotal();
  }

  /**
   * 取得未到達資料
   * @returns 客戶未到達資料
   */
  public getUnArrivalProducts(){
    let tempUnArrivalProduct;
    if(this.tempProduct != null){
      tempUnArrivalProduct = this.tempProduct.filter((x: any) => {
        return x.state === "未到貨";
      });
    }else{
      this.tempProduct = this.product;
      tempUnArrivalProduct = this.tempProduct.filter((x: any) => {
        return x.state === "未到貨";
      });
    }
    this.product = tempUnArrivalProduct;
    this.onTotal();
  }

  /**
   * 取得客戶全部資料
   * @returns 客戶全部資料
   */
  public async getTotalProducts(){
    let tempTotalArrivalProduct;
    if(this.tempProduct != null){
      tempTotalArrivalProduct = this.tempProduct.filter((x: any) => {
        return x.state === "未到貨","已到貨" ;
      });
    }else{
      this.tempProduct = this.product;
      tempTotalArrivalProduct = this.tempProduct.filter((x: any) => {
        return x.state === "未到貨","已到貨" ;
      });
    }
    this.product = tempTotalArrivalProduct;
    this.onTotal();
  }

  /**
   * 計算總金額
   */
  public onTotal(){
    this.totalProduct = 0;
    this.product.forEach(element => {
    this.totalProduct += element.total
    });
  }
}
