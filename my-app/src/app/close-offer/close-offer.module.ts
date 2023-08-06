import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseOfferComponent } from './close-offer.component';
import { closeOfferRoutingModul } from './close-offer-routing.modul';



@NgModule({
  declarations: [CloseOfferComponent],
  imports: [
    CommonModule,
    closeOfferRoutingModul
  ]
})
export class CloseOfferModule { }
