import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClosedOffersComponent } from './user-closed-offers.component';
import { userClosedOffersRoutingModul } from './user-closed-offers-routing.modul';



@NgModule({
  declarations: [UserClosedOffersComponent],
  imports: [
    CommonModule,
    userClosedOffersRoutingModul
  ]
})
export class UserClosedOffersModule { }
