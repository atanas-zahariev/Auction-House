import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DefaultComponent } from './core/default/default.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

import { UsersGuardService } from './guards/userGuard';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [UsersGuardService],
  },
  { path: 'details/:id', component: DetailsComponent },
  {
    path: 'userAction/:id',
    loadChildren: () => import('./close-offer/close-offer.module').then(m => m.CloseOfferModule),
    canActivate: [UsersGuardService],
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
    canActivate: [UsersGuardService],
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [UsersGuardService],
  },
  {
    path: 'closed',
    loadChildren: () => import('./user-closed-offers/user-closed-offers.module').then(m => m.UserClosedOffersModule),
    canActivate: [UsersGuardService],
  },
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
