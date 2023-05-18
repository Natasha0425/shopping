import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo: 'ShopInquire', pathMatch: 'full'},
  { path: 'ShopInquire', loadChildren: () => import("./shop-inquire/shop-inquire.module").then(m => m.ShopInquireModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
