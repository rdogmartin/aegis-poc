import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ErrorHandlerModule } from './error-handling/error-handler.module';
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
  ],
  imports: [
    /** Angular modules */
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    /** Our modules */
    PipesModule,
    SharedModule,
    AppRoutingModule,
    ErrorHandlerModule,
    /** Third-party modules */
    MatButtonModule,
    MatInputModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
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
