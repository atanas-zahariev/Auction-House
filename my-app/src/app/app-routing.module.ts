import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { DefaultComponent } from './default/default.component';
import { CloseOfferComponent } from './close-offer/close-offer.component';
import { UserClosedOffersComponent } from './user-closed-offers/user-closed-offers.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './guards/authGuard';
import { UsersGuardService } from './guards/userGuard';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [UsersGuardService],
  },
  { path: 'catalog', component: CatalogComponent },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [UsersGuardService],
  },
  { path: 'details/:id', component: DetailsComponent },
  {
     path: 'userAction/:id', 
     component: CloseOfferComponent,
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
    component: UserClosedOffersComponent,
    canActivate: [UsersGuardService],
   },
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
