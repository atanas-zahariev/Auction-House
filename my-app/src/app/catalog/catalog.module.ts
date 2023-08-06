import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModul } from './catalog-routing.modul';



@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModul,
  ]
})
export class CatalogModule { }
