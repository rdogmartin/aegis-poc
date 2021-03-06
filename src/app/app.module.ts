import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ErrorHandlerModule } from './error-handling/error-handler.module';
import { JwtInterceptor } from './services/jwt-interceptor.service';
import { DirectivesModule } from './shared/directives/directives.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    HeaderComponent,
    OverviewComponent,
    SignInComponent,
    OrdersComponent,
    AddAddressComponent,
  ],
  imports: [
    /** Angular modules */
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    /** Our modules */
    DirectivesModule,
    PipesModule,
    SharedModule,
    AppRoutingModule,
    ErrorHandlerModule,
    /** Third-party modules */
    MatButtonModule,
    MatInputModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(@Optional() @SkipSelf() self: AppModule) {
    if (self) {
      throw new Error(
        'AppModule is already loaded. Do not import AppModule.');
    }
  }
}
