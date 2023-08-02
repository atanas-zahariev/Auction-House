import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemsService } from './items.service';
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
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CatalogComponent,
    DetailsComponent,
    DefaultComponent,
    CloseOfferComponent,
    UserClosedOffersComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  providers: [AuthService,ItemsService,AuthGuardService,UsersGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
