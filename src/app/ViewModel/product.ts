import { Customer } from './customers';
export declare class Product {
  //編號
  id: number;
  //顧客姓名
  customer: Customer;
  //商品名稱
  name: string;
  //數量
  count: number;
  //售價
  price: number;
  //合計
  total: number;
  //備註
  remark: string;
  //狀態
  state: string;
}
