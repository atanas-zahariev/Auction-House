import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { actionsRoutingModule } from './actions-routing.module';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CloseOfferComponent } from './close-offer/close-offer.component';
import { StoreModule } from '@ngrx/store';
import { IActionsSate } from './+details-store/detail-index';
import { detailsReducer } from './+details-store/details-reducer';



@NgModule({
  declarations: [
    DetailsComponent,
    EditComponent,
    DeleteComponent,
    CloseOfferComponent
  ],
  imports: [
    CommonModule,
    actionsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature<IActionsSate>('actions',{
        details:detailsReducer
    })
  ]
})
export class ActionsModule { }
