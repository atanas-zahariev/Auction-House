import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { UserClosedOffersComponent } from './user-closed-offers/user-closed-offers.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { itemRoutingModule } from './item-routing.module';
import { StoreModule } from '@ngrx/store';
import { IItemsState } from './+store';
import { catalogReducer, userClosedOffersReducer } from './+store/reducer';



@NgModule({
  declarations: [
    CatalogComponent,
    UserClosedOffersComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    itemRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature<IItemsState>('items',{
      catalog:catalogReducer,
      closed:userClosedOffersReducer
    })
  ]
})

export class ItemsModule { }
