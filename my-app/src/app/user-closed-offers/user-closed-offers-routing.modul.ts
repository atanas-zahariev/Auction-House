import {RouterModule,Routes} from '@angular/router';
import { UserClosedOffersComponent } from './user-closed-offers.component';

const routes: Routes = [
    {
        path:'', 
        pathMatch:'full',
        component:UserClosedOffersComponent
    }
]

export const userClosedOffersRoutingModul = RouterModule.forChild(routes);