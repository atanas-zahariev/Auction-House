import {RouterModule,Routes} from '@angular/router';
import { CloseOfferComponent } from './close-offer.component';

const route:Routes = [
    {
       path:'',
       pathMatch:'full',
       component: CloseOfferComponent
    }
]

export const closeOfferRoutingModul = RouterModule.forChild(route);