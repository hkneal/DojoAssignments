import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { BikeOfDayComponent } from './bike-of-day/bike-of-day.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { ListingComponent } from './dashboard/listing/listing.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { BicycleService } from './services/bicycle.service';
import { AuthService } from './services/auth.service';

import { Ng2FileInputModule } from 'ng2-file-input';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { TitilizePipe } from './titilize.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { LogoffComponent } from './logoff/logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeOfDayComponent,
    LoginComponent,
    RegistrationComponent,
    BrowseComponent,
    ListingComponent,
    CreateComponent,
    EditComponent,
    DashboardComponent,
    LoginregComponent,
    TitilizePipe,
    FileSelectDirective,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    Ng2FileInputModule.forRoot({
      dropText: "Image Upload"
    }),
    CookieModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [BicycleService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
