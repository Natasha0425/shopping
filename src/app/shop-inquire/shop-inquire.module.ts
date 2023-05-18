import { ShopInquireService } from './shop-inquire.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ShopInquireRoutingModule } from './shop-inquire-routing.module';
import { ShopInquireComponent } from './shop-inquire.component';
import { ShopTableComponent } from './shop-table/shop-table.component';
import { ShopDialogComponent } from './shop-dialog/shop-dialog.component';
//primeng
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ShopInquireComponent,
    ShopTableComponent,
    ShopDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopInquireRoutingModule,
    HttpClientModule,
    //primeng
    AccordionModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    FieldsetModule,
    DialogModule,
    InputTextModule
  ],
  providers:[ ShopInquireService ]
})
export class ShopInquireModule { }
