import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component'


import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CloseOfferComponent } from './close-offer/close-offer.component';
import { UserClosedOffersComponent } from './user-closed-offers/user-closed-offers.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

import { AuthService } from './auth.service';
import { ItemsService } from './items.service';
import { AuthGuardService } from './guards/authGuard';
import { UsersGuardService } from './guards/userGuard';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { appInterceptorProvider } from './interceptor/appInerceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    DetailsComponent,
    CloseOfferComponent,
    UserClosedOffersComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    AuthService,
    ItemsService,
    AuthGuardService,
    UsersGuardService,
    appInterceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
