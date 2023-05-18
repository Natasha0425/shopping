import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopInquireComponent } from './shop-inquire.component';

const routes: Routes = [
  { path:'',component:ShopInquireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopInquireRoutingModule { }
